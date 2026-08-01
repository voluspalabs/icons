// Read-only catalog helpers shared by the HTTP + MCP functions.
//
// Expands the compact, family-grouped icons.json into a flat, searchable list and
// exposes name -> metadata helpers. Imports only the small icons.json (~100 KB);
// raw SVG markup lives in ./icon-svgs to keep search bundles lean.

import manifest from "../site/public/icons.json" with { type: "json" };
import {
  CATEGORY_LABELS,
  matchesSearch,
  normalizeSearch,
  toComponentName,
} from "./icon-taxonomy.js";
import type { IconCategoryId, IconVariant } from "./icon-taxonomy.js";

export const PACKAGE_NAME = manifest.package;
export const TOTAL_ICONS = manifest.total;
export const TOTAL_FAMILIES = manifest.families;
export const VARIANTS = manifest.variants as IconVariant[];
export const CATEGORIES = manifest.categories as Record<IconCategoryId, string>;

export interface CatalogEntry {
  name: string;
  base: string;
  display: string;
  category: IconCategoryId;
  categoryLabel: string;
  variant: IconVariant;
  component: string;
  import: string;
  searchText: string;
}

export const fileNameFor = (base: string, variant: IconVariant) =>
  variant === "other" ? `pi-${base}` : `pi-${base}-${variant}`;

export const importFor = (name: string) => `${PACKAGE_NAME}/${name}`;

export const usageFor = (component: string, name: string) =>
  `import { ${component} } from '${importFor(name)}'`;

const buildEntries = (): CatalogEntry[] => {
  const entries: CatalogEntry[] = [];

  for (const family of manifest.icons) {
    const category = family.c as IconCategoryId;
    const categoryLabel = CATEGORY_LABELS[category] ?? category;

    for (const variant of family.v as IconVariant[]) {
      const name = fileNameFor(family.n, variant);
      const component = toComponentName(name);

      entries.push({
        base: family.n,
        category,
        categoryLabel,
        component,
        display: family.d,
        import: importFor(name),
        name,
        searchText: normalizeSearch(
          [name, family.d, category, categoryLabel, variant].join(" ")
        ),
        variant,
      });
    }
  }

  return entries;
};

export const ENTRIES = buildEntries();

const ENTRIES_BY_NAME = new Map(ENTRIES.map((entry) => [entry.name, entry]));

export const getEntry = (name: string) => ENTRIES_BY_NAME.get(name);

export interface SearchOptions {
  limit?: number;
  variant?: string;
  category?: string;
}

export interface SearchResult {
  query: string;
  total: number;
  count: number;
  results: Pick<
    CatalogEntry,
    "name" | "component" | "category" | "variant" | "import"
  >[];
}

const DEFAULT_LIMIT = 25;
const MAX_LIMIT = 100;
const SCORE_EXACT = 100;
const SCORE_PREFIX = 50;
const SCORE_INCLUDES = 25;

// Cheap relevance: reward exact name/base hits and prefix matches.
const score = (entry: CatalogEntry, query: string) => {
  if (!query) {
    return 0;
  }
  if (entry.name === query || entry.base === query) {
    return SCORE_EXACT;
  }
  if (entry.base.startsWith(query) || entry.name.startsWith(query)) {
    return SCORE_PREFIX;
  }
  if (entry.base.includes(query)) {
    return SCORE_INCLUDES;
  }
  return 0;
};

export const searchIcons = (
  query: string,
  options: SearchOptions = {}
): SearchResult => {
  const normalized = normalizeSearch(query ?? "");
  const limit = Math.min(
    Math.max(options.limit ?? DEFAULT_LIMIT, 1),
    MAX_LIMIT
  );
  const variant = options.variant?.trim().toLowerCase();
  const category = options.category?.trim().toLowerCase();

  const matched = ENTRIES.filter((entry) => {
    if (variant && entry.variant !== variant) {
      return false;
    }
    if (category && entry.category !== category) {
      return false;
    }
    return matchesSearch(entry.searchText, normalized);
  });

  matched.sort(
    (left, right) =>
      score(right, normalized) - score(left, normalized) ||
      left.name.localeCompare(right.name)
  );

  return {
    count: Math.min(matched.length, limit),
    query: normalized,
    results: matched.slice(0, limit).map((entry) => ({
      category: entry.category,
      component: entry.component,
      import: entry.import,
      name: entry.name,
      variant: entry.variant,
    })),
    total: matched.length,
  };
};

export const categoriesWithCounts = () => {
  const counts = new Map<IconCategoryId, number>();
  for (const entry of ENTRIES) {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  }

  return (Object.keys(CATEGORIES) as IconCategoryId[]).map((id) => ({
    icons: counts.get(id) ?? 0,
    id,
    label: CATEGORIES[id],
  }));
};
