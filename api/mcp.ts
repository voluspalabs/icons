import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { z } from 'zod'
import {
  categoriesWithCounts,
  getEntry,
  importFor,
  PACKAGE_NAME,
  searchIcons,
  TOTAL_FAMILIES,
  TOTAL_ICONS,
  usageFor,
  VARIANTS,
} from '../shared/icon-catalog.js'
import { getSvg } from '../shared/icon-svgs.js'
import { toComponentName } from '../shared/icon-taxonomy.js'

const VARIANT_VALUES = VARIANTS as [string, ...string[]]

function text(value: string) {
  return { content: [{ type: 'text' as const, text: value }] }
}

function buildServer() {
  const server = new McpServer({
    name: 'voluspa-icons',
    version: '1.0.0',
  })

  server.registerTool(
    'search_icons',
    {
      title: 'Search icons',
      description: `Search the ${TOTAL_ICONS} ${PACKAGE_NAME} icons by name or concept. Returns icon names only (no SVG). Call get_icon next to fetch one.`,
      inputSchema: {
        query: z
          .string()
          .describe('Concept or keyword, e.g. "arrow right", "github", "lock"'),
        limit: z.number().int().min(1).max(100).optional(),
        variant: z.enum(VARIANT_VALUES).optional(),
        category: z.string().optional(),
      },
    },
    ({ query, limit, variant, category }) => {
      const result = searchIcons(query, { limit, variant, category })
      if (result.total === 0) {
        return text(`No icons match "${query}". Try a broader keyword.`)
      }

      const lines = result.results
        .map((r) => `${r.name}  [${r.variant}]  ${r.category}`)
        .join('\n')

      return text(
        `${result.total} match(es) for "${result.query}" (showing ${result.count}):\n${lines}\n\nCall get_icon({ name }) to get the SVG + React import.`,
      )
    },
  )

  server.registerTool(
    'get_icon',
    {
      title: 'Get icon',
      description:
        'Fetch one icon by exact name (e.g. pi-github-stroke). Returns the raw <svg> and the React import + usage snippet.',
      inputSchema: {
        name: z
          .string()
          .describe(
            'Exact icon name, e.g. pi-github-stroke or pi-arrow-right-solid',
          ),
      },
    },
    ({ name }) => {
      const normalized = normalizeName(name)
      const svg = getSvg(normalized)
      if (!svg) {
        return {
          ...text(
            `Unknown icon "${normalized}". Use search_icons first; names look like pi-<name>-<variant>.`,
          ),
          isError: true,
        }
      }

      const entry = getEntry(normalized)
      const component = entry?.component ?? toComponentName(normalized)

      return text(
        `${normalized} (${component}) — ${entry?.category ?? 'ui'} / ${entry?.variant ?? 'other'}\n\n${usageFor(component, normalized)}\n\nImport path: ${importFor(normalized)}\n\nSVG:\n${svg}`,
      )
    },
  )

  server.registerTool(
    'list_categories',
    {
      title: 'List categories',
      description: `List the icon categories with counts (${TOTAL_FAMILIES} families total).`,
      inputSchema: {},
    },
    () => {
      const lines = categoriesWithCounts()
        .map((c) => `${c.id}  —  ${c.label}  (${c.icons} icons)`)
        .join('\n')
      return text(`Categories:\n${lines}`)
    },
  )

  return server
}

function normalizeName(value: string) {
  let name = value
    .trim()
    .toLowerCase()
    .replace(/\.(svg|tsx)$/, '')
  if (!name.startsWith('pi-')) {
    name = `pi-${name}`
  }
  return name
}

// Stateless Streamable HTTP: a fresh server + transport per request, JSON responses
// (no SSE/session state) so it runs cleanly on serverless.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({
      jsonrpc: '2.0',
      error: { code: -32_000, message: 'Method not allowed. Use POST.' },
      id: null,
    })
    return
  }

  const server = buildServer()
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  })

  res.on('close', () => {
    transport.close()
    server.close()
  })

  await server.connect(transport)
  await transport.handleRequest(req, res, req.body)
}
