/* biome-ignore-all lint/nursery/noJsxPropsBind: Top-level state setters are passed directly to composed controls. */
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { CATALOG, matchesSearch, normalizeSearch, TOTAL_ICONS } from './catalog'
import { Controls } from './components/controls'
import { IconDetail } from './components/icon-detail'
import { IconResults } from './components/results'
import {
  COPY_STATUS_DURATION_MS,
  DEFAULT_ICON_SIZE,
  ICON_CATEGORIES,
  VARIANT_ORDER,
} from './constants'
import type {
  IconCategoryId,
  IconDensity,
  IconEntry,
  IconFamily,
  IconVariant,
  IconViewMode,
} from './types'

type CategoryFilter = IconCategoryId | 'all'

function groupFamilies(families: IconFamily[]) {
  return ICON_CATEGORIES.reduce<
    Array<{ categoryId: IconCategoryId; families: IconFamily[] }>
  >((groups, category) => {
    const categoryFamilies = families.filter(
      (family) => family.categoryId === category.id,
    )

    if (categoryFamilies.length > 0) {
      groups.push({
        categoryId: category.id,
        families: categoryFamilies,
      })
    }

    return groups
  }, [])
}

export function App() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const [activeVariants, setActiveVariants] = useState(
    () => new Set<IconVariant>(VARIANT_ORDER),
  )
  const [density, setDensity] = useState<IconDensity>('compact')
  const [viewMode, setViewMode] = useState<IconViewMode>('grid')
  const [iconSize, setIconSize] = useState(DEFAULT_ICON_SIZE)
  const [selected, setSelected] = useState<IconEntry | null>(
    () => CATALOG[0]?.variants[0] ?? null,
  )
  const [copiedLabel, setCopiedLabel] = useState('')
  const copiedTimer = useRef<number | null>(null)
  const normalizedQuery = normalizeSearch(deferredQuery)

  const filteredFamilies = useMemo(
    () =>
      CATALOG.map((family) => ({
        ...family,
        variants: family.variants.filter((entry) =>
          activeVariants.has(entry.variant),
        ),
      })).filter(
        (family) =>
          family.variants.length > 0 &&
          (activeCategory === 'all' || family.categoryId === activeCategory) &&
          (matchesSearch(family.searchText, normalizedQuery) ||
            family.variants.some((entry) =>
              matchesSearch(entry.searchText, normalizedQuery),
            )),
      ),
    [activeCategory, activeVariants, normalizedQuery],
  )
  const groupedFamilies = useMemo(
    () => groupFamilies(filteredFamilies),
    [filteredFamilies],
  )

  const visibleSelected = useMemo(() => {
    const selectedIsVisible = filteredFamilies.some((family) =>
      family.variants.some((entry) => entry.id === selected?.id),
    )

    return selectedIsVisible
      ? selected
      : (filteredFamilies[0]?.variants[0] ?? null)
  }, [filteredFamilies, selected])

  const selectedFamily = useMemo(
    () =>
      filteredFamilies.find((family) =>
        family.variants.some((entry) => entry.id === visibleSelected?.id),
      ) ?? null,
    [filteredFamilies, visibleSelected],
  )

  useEffect(
    () => () => {
      if (copiedTimer.current !== null) {
        globalThis.clearTimeout(copiedTimer.current)
      }
    },
    [],
  )

  const toggleVariant = (variant: IconVariant) => {
    setActiveVariants((current) => {
      const next = new Set(current)

      if (next.has(variant)) {
        next.delete(variant)
      } else {
        next.add(variant)
      }

      return next.size > 0 ? next : current
    })
  }

  const copyText = useCallback(async (text: string, label: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedLabel(label)

    if (copiedTimer.current !== null) {
      globalThis.clearTimeout(copiedTimer.current)
    }

    copiedTimer.current = globalThis.setTimeout(
      () => setCopiedLabel(''),
      COPY_STATUS_DURATION_MS,
    )
  }, [])

  return (
    <main className="app-shell">
      <Controls
        activeCategory={activeCategory}
        activeVariants={activeVariants}
        density={density}
        iconSize={iconSize}
        onCategoryChange={setActiveCategory}
        onDensityChange={setDensity}
        onIconSizeChange={setIconSize}
        onQueryChange={setQuery}
        onToggleVariant={toggleVariant}
        onViewModeChange={setViewMode}
        query={query}
        totalFamilies={CATALOG.length}
        totalIcons={TOTAL_ICONS}
        viewMode={viewMode}
      />

      <div className="workspace">
        <IconResults
          density={density}
          groups={groupedFamilies}
          iconSize={iconSize}
          onSelect={setSelected}
          selected={visibleSelected}
          viewMode={viewMode}
        />
        <IconDetail
          copiedLabel={copiedLabel}
          family={selectedFamily}
          iconSize={iconSize}
          onCopy={copyText}
          onSelect={setSelected}
          selected={visibleSelected}
        />
      </div>
    </main>
  )
}
