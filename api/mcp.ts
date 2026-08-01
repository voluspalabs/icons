import { toNodeHandler } from "@modelcontextprotocol/node";
import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

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
} from "../shared/icon-catalog.js";
import { getSvg } from "../shared/icon-svgs.js";
import { toComponentName } from "../shared/icon-taxonomy.js";

const VARIANT_VALUES = VARIANTS as [string, ...string[]];

// The catalog is baked into the deployment, so every list result is immutable
// for the lifetime of this build. SEP-2549 cache hints let 2026-07-28 clients
// (and shared intermediaries) skip re-listing entirely.
const ONE_DAY_MS = 86_400_000;
const CACHE_HINT = { cacheScope: "public", ttlMs: ONE_DAY_MS } as const;

const text = (value: string) => ({
  content: [{ text: value, type: "text" as const }],
});

const normalizeName = (value: string) => {
  let name = value
    .trim()
    .toLowerCase()
    .replace(/\.(?:svg|tsx)$/u, "");
  if (!name.startsWith("pi-")) {
    name = `pi-${name}`;
  }
  return name;
};

const buildServer = () => {
  const server = new McpServer(
    {
      name: "voluspa-icons",
      version: "1.0.0",
    },
    {
      cacheHints: {
        "server/discover": CACHE_HINT,
        "tools/list": CACHE_HINT,
      },
    }
  );

  server.registerTool(
    "search_icons",
    {
      description: `Search the ${TOTAL_ICONS} ${PACKAGE_NAME} icons by name or concept. Returns icon names only (no SVG). Call get_icon next to fetch one.`,
      inputSchema: z.object({
        category: z.string().optional(),
        limit: z.number().int().min(1).max(100).optional(),
        query: z
          .string()
          .describe('Concept or keyword, e.g. "arrow right", "github", "lock"'),
        variant: z.enum(VARIANT_VALUES).optional(),
      }),
      title: "Search icons",
    },
    ({ query, limit, variant, category }) => {
      const result = searchIcons(query, { category, limit, variant });
      if (result.total === 0) {
        return text(`No icons match "${query}". Try a broader keyword.`);
      }

      const lines = result.results
        .map((r) => `${r.name}  [${r.variant}]  ${r.category}`)
        .join("\n");

      return text(
        `${result.total} match(es) for "${result.query}" (showing ${result.count}):\n${lines}\n\nCall get_icon({ name }) to get the SVG + React import.`
      );
    }
  );

  server.registerTool(
    "get_icon",
    {
      description:
        "Fetch one icon by exact name (e.g. pi-github-stroke). Returns the raw <svg> and the React import + usage snippet.",
      inputSchema: z.object({
        name: z
          .string()
          .describe(
            "Exact icon name, e.g. pi-github-stroke or pi-arrow-right-solid"
          ),
      }),
      title: "Get icon",
    },
    ({ name }) => {
      const normalized = normalizeName(name);
      const svg = getSvg(normalized);
      if (!svg) {
        return {
          ...text(
            `Unknown icon "${normalized}". Use search_icons first; names look like pi-<name>-<variant>.`
          ),
          isError: true,
        };
      }

      const entry = getEntry(normalized);
      const component = entry?.component ?? toComponentName(normalized);

      return text(
        `${normalized} (${component}) — ${entry?.category ?? "ui"} / ${entry?.variant ?? "other"}\n\n${usageFor(component, normalized)}\n\nImport path: ${importFor(normalized)}\n\nSVG:\n${svg}`
      );
    }
  );

  server.registerTool(
    "list_categories",
    {
      description: `List the icon categories with counts (${TOTAL_FAMILIES} families total).`,
      title: "List categories",
    },
    () => {
      const lines = categoriesWithCounts()
        .map((c) => `${c.id}  —  ${c.label}  (${c.icons} icons)`)
        .join("\n");
      return text(`Categories:\n${lines}`);
    }
  );

  return server;
};

// One handler for the whole lambda: it serves 2026-07-28 traffic (stateless by
// spec — no initialize handshake, no Mcp-Session-Id) and falls back to a
// per-request stateless 2025-era server for older clients. `responseMode: json`
// keeps every exchange a single JSON body, which suits serverless; none of the
// tools emit mid-call notifications.
const mcpHandler = createMcpHandler(buildServer, {
  legacy: "stateless",
  responseMode: "json",
});

const nodeHandler = toNodeHandler(mcpHandler);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Expose-Headers", "*");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  // Vercel pre-parses the JSON body, so hand it over: without it the adapter
  // would try to read an already-drained stream.
  await nodeHandler(req, res, req.body);
}
