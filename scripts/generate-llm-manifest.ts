// Generates the LLM-facing artifacts consumed by the HTTP + MCP surfaces:
//
//   site/public/icons.json   compact, family-grouped catalog (downloadable / greppable)
//   site/public/svgs.json    fileName -> compact raw <svg> (read by the API functions)
//   site/public/i/<file>.svg one raw svg per icon (direct, immutable-cached URLs)
//   site/public/llms.txt     routing doc telling agents how to use the above
//
// Runs under Bun (`bun run scripts/generate-llm-manifest.ts`) so it can import the
// same framework-free taxonomy the catalog site uses — single source of truth.

import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import {
  getCategoryId,
  getVariant,
  ICON_CATEGORIES,
  type IconCategoryId,
  type IconVariant,
  removeVariant,
  toDisplayName,
  VARIANT_ORDER,
} from '../shared/icon-taxonomy'

const ROOT = new URL('../', import.meta.url)
const SOURCE_DIR = new URL('src/', ROOT)
const PUBLIC_DIR = new URL('site/public/', ROOT)
const SVG_DIR = new URL('i/', PUBLIC_DIR)

const TSX_EXTENSION_PATTERN = /\.tsx$/
const SVG_BLOCK_PATTERN = /<svg[\s\S]*?<\/svg>/
const PROPS_SPREAD_PATTERN = /\{\s*\.\.\.props\s*\}/g
const TAG_GAP_PATTERN = />\s+</g
const WHITESPACE_RUN_PATTERN = /\s+/g
const SPACE_BEFORE_CLOSE_PATTERN = /\s+>/g

// JSX uses camelCase SVG attributes; raw SVG markup needs the hyphenated forms.
const ATTRIBUTE_RENAMES: [RegExp, string][] = [
  [/\bstrokeWidth=/g, 'stroke-width='],
  [/\bstrokeLinecap=/g, 'stroke-linecap='],
  [/\bstrokeLinejoin=/g, 'stroke-linejoin='],
  [/\bstrokeMiterlimit=/g, 'stroke-miterlimit='],
  [/\bstrokeDasharray=/g, 'stroke-dasharray='],
  [/\bstrokeDashoffset=/g, 'stroke-dashoffset='],
  [/\bstrokeOpacity=/g, 'stroke-opacity='],
  [/\bfillRule=/g, 'fill-rule='],
  [/\bclipRule=/g, 'clip-rule='],
  [/\bfillOpacity=/g, 'fill-opacity='],
  [/\bclipPath=/g, 'clip-path='],
]

const PACKAGE_NAME = '@voluspalabs/icons'
const WRITE_CONCURRENCY = 256

function resolveSiteUrl() {
  const explicit = process.env.LLM_SITE_URL
  if (explicit) {
    return explicit.replace(/\/$/, '')
  }

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) {
    return `https://${vercel}`
  }

  return 'https://icons.voluspalabs.com'
}

function toRawSvg(source: string) {
  const match = source.match(SVG_BLOCK_PATTERN)
  if (!match) {
    return null
  }

  let svg = match[0].replace(PROPS_SPREAD_PATTERN, '')

  for (const [pattern, replacement] of ATTRIBUTE_RENAMES) {
    svg = svg.replace(pattern, replacement)
  }

  return svg
    .replace(WHITESPACE_RUN_PATTERN, ' ')
    .replace(TAG_GAP_PATTERN, '><')
    .replace(SPACE_BEFORE_CLOSE_PATTERN, '>')
    .trim()
}

type FamilyAccumulator = {
  baseName: string
  categoryId: IconCategoryId
  displayName: string
  variants: IconVariant[]
}

async function run() {
  const siteUrl = resolveSiteUrl()
  const sourcePath = fileURLToPath(SOURCE_DIR)

  const fileNames = (await readdir(sourcePath))
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace(TSX_EXTENSION_PATTERN, ''))
    .sort((left, right) => left.localeCompare(right))

  await rm(SVG_DIR, { force: true, recursive: true })
  await mkdir(SVG_DIR, { recursive: true })

  const svgs: Record<string, string> = {}
  const families = new Map<string, FamilyAccumulator>()
  const skipped: string[] = []

  for (const fileName of fileNames) {
    const variant = getVariant(fileName)
    const baseSlug = removeVariant(fileName, variant)
    const baseName = baseSlug.replace(/^pi-/, '')
    const categoryId = getCategoryId(baseSlug)

    const source = await readFile(
      fileURLToPath(new URL(`${fileName}.tsx`, SOURCE_DIR)),
      'utf8',
    )
    const svg = toRawSvg(source)

    if (!svg) {
      skipped.push(fileName)
      continue
    }

    svgs[fileName] = svg

    const family = families.get(baseSlug)
    if (family) {
      if (!family.variants.includes(variant)) {
        family.variants.push(variant)
      }
      continue
    }

    families.set(baseSlug, {
      baseName,
      categoryId,
      displayName: toDisplayName(baseSlug),
      variants: [variant],
    })
  }

  // Write one compact svg file per icon.
  const svgEntries = Object.entries(svgs)
  for (let index = 0; index < svgEntries.length; index += WRITE_CONCURRENCY) {
    const batch = svgEntries.slice(index, index + WRITE_CONCURRENCY)
    await Promise.all(
      batch.map(([fileName, svg]) =>
        writeFile(fileURLToPath(new URL(`${fileName}.svg`, SVG_DIR)), svg),
      ),
    )
  }

  const icons = [...families.values()]
    .sort((left, right) => left.baseName.localeCompare(right.baseName))
    .map((family) => ({
      n: family.baseName,
      d: family.displayName,
      c: family.categoryId,
      v: family.variants.sort(
        (left, right) =>
          VARIANT_ORDER.indexOf(left) - VARIANT_ORDER.indexOf(right),
      ),
    }))

  const categories = Object.fromEntries(
    ICON_CATEGORIES.map((category) => [category.id, category.label]),
  )

  const manifest = {
    package: PACKAGE_NAME,
    version: process.env.npm_package_version ?? '0.0.0',
    total: Object.keys(svgs).length,
    families: icons.length,
    variants: VARIANT_ORDER,
    naming: 'pi-<name>-<variant>; <variant>=other has no suffix (pi-<name>)',
    categories,
    icons,
  }

  await writeFile(
    fileURLToPath(new URL('icons.json', PUBLIC_DIR)),
    JSON.stringify(manifest),
  )
  await writeFile(
    fileURLToPath(new URL('svgs.json', PUBLIC_DIR)),
    JSON.stringify(svgs),
  )
  await writeFile(
    fileURLToPath(new URL('llms.txt', PUBLIC_DIR)),
    buildLlmsTxt({ siteUrl, total: manifest.total, families: icons.length }),
  )

  if (skipped.length > 0) {
    process.stderr.write(
      `generate-llm-manifest: skipped ${skipped.length} files with no <svg> block: ${skipped
        .slice(0, 10)
        .join(', ')}\n`,
    )
  }

  process.stdout.write(
    `generate-llm-manifest: ${manifest.total} icons, ${icons.length} families -> site/public\n`,
  )
}

function buildLlmsTxt(input: {
  siteUrl: string
  total: number
  families: number
}) {
  const { siteUrl, total, families } = input
  const categoryLines = ICON_CATEGORIES.map(
    (category) => `- ${category.id}: ${category.label}`,
  ).join('\n')

  return `# ${PACKAGE_NAME}

> ${total} React SVG icons (${families} families x up to 6 variants) from Voluspa Labs.
> This file tells AI agents how to search and fetch icons without cloning the repo.
> Search returns names only; fetch one icon at a time. Never request the whole set.

## Naming

Every icon is "pi-<name>-<variant>" (the "other" variant has no suffix: "pi-<name>").
Variants: stroke, duo-stroke, solid, duo-solid, contrast, other.
React component = PascalCase of the file name, e.g. pi-github-stroke -> PiGithubStroke.
Import: import { PiGithubStroke } from "${PACKAGE_NAME}/pi-github-stroke"

## Endpoints

- GET ${siteUrl}/api/search?q=<query>&limit=25&variant=<variant>&category=<id>
  Token-light search. Returns JSON { total, results: [{ name, family, category, variant, import }] }.
- GET ${siteUrl}/api/icon?name=pi-github-stroke[&format=json|svg|react]
  One icon. json (default) = { name, component, import, usage, svg }. svg = raw markup.
- GET ${siteUrl}/i/pi-github-stroke.svg
  Raw SVG file (immutable-cached). Usable directly in <img src> or inline.
- GET ${siteUrl}/icons.json
  Full compact catalog: { icons: [{ n, d, c, v }] }. Prefer /api/search to save tokens.

## MCP server (recommended for agents)

Streamable HTTP endpoint: ${siteUrl}/api/mcp
Tools:
- search_icons({ query, limit?, variant?, category? }) -> compact name list
- get_icon({ name }) -> raw <svg> + React import + usage snippet
- list_categories() -> categories with counts

Example client config:
{ "mcpServers": { "voluspa-icons": { "url": "${siteUrl}/api/mcp" } } }

## Workflow for an agent

1. search_icons (or GET /api/search) with a concept, e.g. "arrow right".
2. Pick a name + variant from the results.
3. get_icon (or GET /api/icon) for that exact name to get the SVG and import line.

## Categories

${categoryLines}
`
}

await run()
