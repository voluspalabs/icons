import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getEntry, importFor, usageFor } from '../shared/icon-catalog'
import { getSvg } from '../shared/icon-svgs'
import { toComponentName } from '../shared/icon-taxonomy'

// GET /api/icon?name=pi-github-stroke&format=json|svg|react
// Returns a single icon as raw SVG and/or a ready-to-use React import.
export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed. Use GET.' })
    return
  }

  const name = normalizeName(firstValue(req.query.name))
  if (!name) {
    res.status(400).json({ error: 'Missing required "name" query parameter.' })
    return
  }

  const svg = getSvg(name)
  if (!svg) {
    res.status(404).json({
      error: `Unknown icon "${name}".`,
      hint: 'Search first: /api/search?q=<concept>. Names look like pi-<name>-<variant>.',
    })
    return
  }

  const format = (firstValue(req.query.format) ?? 'json').toLowerCase()
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')

  if (format === 'svg') {
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8')
    res.status(200).send(svg)
    return
  }

  const entry = getEntry(name)
  const component = entry?.component ?? toComponentName(name)
  const payload = {
    name,
    component,
    variant: entry?.variant,
    category: entry?.category,
    import: importFor(name),
    usage: usageFor(component, name),
    svg: format === 'react' ? undefined : svg,
  }

  res.status(200).json(payload)
}

function normalizeName(value: string | undefined) {
  if (!value) {
    return
  }

  let name = value
    .trim()
    .toLowerCase()
    .replace(/\.(svg|tsx)$/, '')
  if (!name.startsWith('pi-')) {
    name = `pi-${name}`
  }
  return name
}

function firstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}
