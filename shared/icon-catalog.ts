// Read-only catalog helpers shared by the HTTP + MCP functions.
//
// Expands the compact, family-grouped icons.json into a flat, searchable list and
// exposes name -> metadata helpers. Imports only the small icons.json (~100 KB);
// raw SVG markup lives in ./icon-svgs to keep search bundles lean.

import manifest from '../site/public/icons.json' with { type: 'json' }
import {
  CATEGORY_LABELS,
  type IconCategoryId,
  type IconVariant,
  matchesSearch,
  normalizeSearch,
  toComponentName,
} from './icon-taxonomy'

export const PACKAGE_NAME = manifest.package
export const TOTAL_ICONS = manifest.total
export const TOTAL_FAMILIES = manifest.families
export const VARIANTS = manifest.variants as IconVariant[]
export const CATEGORIES = manifest.categories as Record<IconCategoryId, string>

export type CatalogEntry = {
  name: string
  base: string
  display: string
  category: IconCategoryId
  categoryLabel: string
  variant: IconVariant
  component: string
  import: string
  searchText: string
}

export function fileNameFor(base: string, variant: IconVariant) {
  return variant === 'other' ? `pi-${base}` : `pi-${base}-${variant}`
}

export function importFor(name: string) {
  return `${PACKAGE_NAME}/${name}`
}

export function usageFor(component: string, name: string) {
  return `import { ${component} } from '${importFor(name)}'`
}

function buildEntries(): CatalogEntry[] {
  const entries: CatalogEntry[] = []

  for (const family of manifest.icons) {
    const category = family.c as IconCategoryId
    const categoryLabel = CATEGORY_LABELS[category] ?? category

    for (const variant of family.v as IconVariant[]) {
      const name = fileNameFor(family.n, variant)
      const component = toComponentName(name)

      entries.push({
        name,
        base: family.n,
        display: family.d,
        category,
        categoryLabel,
        variant,
        component,
        import: importFor(name),
        searchText: normalizeSearch(
          [name, family.d, category, categoryLabel, variant].join(' '),
        ),
      })
    }
  }

  return entries
}

export const ENTRIES = buildEntries()

const ENTRIES_BY_NAME = new Map(ENTRIES.map((entry) => [entry.name, entry]))

export function getEntry(name: string) {
  return ENTRIES_BY_NAME.get(name)
}

export type SearchOptions = {
  limit?: number
  variant?: string
  category?: string
}

export type SearchResult = {
  query: string
  total: number
  count: number
  results: Pick<
    CatalogEntry,
    'name' | 'component' | 'category' | 'variant' | 'import'
  >[]
}

const DEFAULT_LIMIT = 25
const MAX_LIMIT = 100
const SCORE_EXACT = 100
const SCORE_PREFIX = 50
const SCORE_INCLUDES = 25

export function searchIcons(
  query: string,
  options: SearchOptions = {},
): SearchResult {
  const normalized = normalizeSearch(query ?? '')
  const limit = Math.min(Math.max(options.limit ?? DEFAULT_LIMIT, 1), MAX_LIMIT)
  const variant = options.variant?.trim().toLowerCase()
  const category = options.category?.trim().toLowerCase()

  const matched = ENTRIES.filter((entry) => {
    if (variant && entry.variant !== variant) {
      return false
    }
    if (category && entry.category !== category) {
      return false
    }
    return matchesSearch(entry.searchText, normalized)
  })

  matched.sort(
    (left, right) =>
      score(right, normalized) - score(left, normalized) ||
      left.name.localeCompare(right.name),
  )

  return {
    query: normalized,
    total: matched.length,
    count: Math.min(matched.length, limit),
    results: matched.slice(0, limit).map((entry) => ({
      name: entry.name,
      component: entry.component,
      category: entry.category,
      variant: entry.variant,
      import: entry.import,
    })),
  }
}

// Cheap relevance: reward exact name/base hits and prefix matches.
function score(entry: CatalogEntry, query: string) {
  if (!query) {
    return 0
  }
  if (entry.name === query || entry.base === query) {
    return SCORE_EXACT
  }
  if (entry.base.startsWith(query) || entry.name.startsWith(query)) {
    return SCORE_PREFIX
  }
  if (entry.base.includes(query)) {
    return SCORE_INCLUDES
  }
  return 0
}

export function categoriesWithCounts() {
  const counts = new Map<IconCategoryId, number>()
  for (const entry of ENTRIES) {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1)
  }

  return (Object.keys(CATEGORIES) as IconCategoryId[]).map((id) => ({
    id,
    label: CATEGORIES[id],
    icons: counts.get(id) ?? 0,
  }))
}
