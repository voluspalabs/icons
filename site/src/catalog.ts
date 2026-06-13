import {
  CATEGORY_LABELS,
  getCategoryId,
  getVariant,
  ICON_CATEGORIES,
  normalizeSearch,
  removeVariant,
  toComponentName,
  toDisplayName,
  VARIANT_LABELS,
  VARIANT_ORDER,
} from '../../shared/icon-taxonomy'
import type { IconCategoryId, IconEntry, IconFamily, IconLoader } from './types'

const TSX_EXTENSION_PATTERN = /\.tsx$/

export const iconLoaders = import.meta.glob('../../src/pi-*.tsx') as Record<
  string,
  IconLoader
>

function buildCatalog() {
  const entries = Object.keys(iconLoaders)
    .map((modulePath) => {
      const fileName = modulePath
        .split('/')
        .at(-1)
        ?.replace(TSX_EXTENSION_PATTERN, '')

      if (!fileName) {
        return null
      }

      const variant = getVariant(fileName)
      const baseSlug = removeVariant(fileName, variant)
      const categoryId = getCategoryId(baseSlug)
      const componentName = toComponentName(fileName)
      const displayName = toDisplayName(baseSlug)
      const importPath = `@voluspalabs/icons/${fileName}`
      const searchText = normalizeSearch(
        [
          fileName,
          componentName,
          displayName,
          baseSlug,
          categoryId,
          CATEGORY_LABELS[categoryId],
          variant,
          VARIANT_LABELS[variant],
        ].join(' '),
      )

      return {
        baseSlug,
        categoryId,
        componentName,
        displayName,
        fileName,
        id: fileName,
        importPath,
        modulePath,
        searchText,
        variant,
      } satisfies IconEntry
    })
    .filter((entry): entry is IconEntry => entry !== null)
    .sort((left, right) => left.fileName.localeCompare(right.fileName))

  const families = new Map<string, IconFamily>()

  for (const entry of entries) {
    const family = families.get(entry.baseSlug)

    if (family) {
      family.variants.push(entry)
      family.searchText = `${family.searchText} ${entry.searchText}`
      family.totalVariants += 1
      continue
    }

    families.set(entry.baseSlug, {
      categoryId: entry.categoryId,
      displayName: entry.displayName,
      id: entry.baseSlug,
      searchText: entry.searchText,
      totalVariants: 1,
      variants: [entry],
    })
  }

  return [...families.values()]
    .map((family) => ({
      ...family,
      searchText: normalizeSearch(family.searchText),
      variants: family.variants.sort(
        (left, right) =>
          VARIANT_ORDER.indexOf(left.variant) -
            VARIANT_ORDER.indexOf(right.variant) ||
          left.fileName.localeCompare(right.fileName),
      ),
    }))
    .sort(
      (left, right) =>
        ICON_CATEGORIES.findIndex(
          (category) => category.id === left.categoryId,
        ) -
          ICON_CATEGORIES.findIndex(
            (category) => category.id === right.categoryId,
          ) || left.displayName.localeCompare(right.displayName),
    )
}

export const CATALOG = buildCatalog()
export const TOTAL_ICONS = CATALOG.reduce(
  (total, family) => total + family.totalVariants,
  0,
)

export type CategoryStat = {
  families: number
  icons: number
}

function buildCategoryStats() {
  const stats = new Map<IconCategoryId, CategoryStat>()

  for (const family of CATALOG) {
    const current = stats.get(family.categoryId) ?? { families: 0, icons: 0 }

    current.families += 1
    current.icons += family.totalVariants
    stats.set(family.categoryId, current)
  }

  return stats
}

export const CATEGORY_STATS = buildCategoryStats()
