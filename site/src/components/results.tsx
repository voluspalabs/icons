/* biome-ignore-all lint/nursery/noJsxPropsBind: Virtual rows pass item-scoped selection callbacks. */
import {
  type CSSProperties,
  type UIEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { CATEGORY_LABELS, VARIANT_LABELS } from '../constants'
import { useMeasuredElement } from '../hooks/use-measured-element'
import {
  CATEGORY_HEADER_HEIGHT,
  GRID_CARD_HEIGHTS,
  GRID_MIN_CARD_WIDTHS,
  GRID_VARIANT_ICON_MIN_SIZE,
  GRID_VARIANT_ICON_SCALE,
  OVERSCAN_DIRECTIONS,
  RESULTS_NARROW_WIDTH,
  RESULTS_OVERSCAN,
  ROW_HEIGHTS,
} from '../layout'
import type {
  IconCategoryId,
  IconDensity,
  IconEntry,
  IconFamily,
  IconViewMode,
} from '../types'
import { IconGlyph } from './icon-glyph'

type IconGroup = {
  categoryId: IconCategoryId
  families: IconFamily[]
}

type IconResultsProps = {
  density: IconDensity
  groups: IconGroup[]
  iconSize: number
  onSelect: (entry: IconEntry) => void
  selected: IconEntry | null
  viewMode: IconViewMode
}

type VirtualItem =
  | {
      categoryId: IconCategoryId
      height: number
      offset: number
      type: 'header'
    }
  | {
      family: IconFamily
      height: number
      offset: number
      type: 'list-family'
    }
  | {
      columns: number
      families: IconFamily[]
      height: number
      offset: number
      type: 'grid-row'
    }

type LayoutResult = {
  items: VirtualItem[]
  totalHeight: number
}

function getColumnCount(width: number, density: IconDensity) {
  if (width <= 0) {
    return 1
  }

  return Math.max(1, Math.floor(width / GRID_MIN_CARD_WIDTHS[density]))
}

function buildVirtualLayout({
  density,
  groups,
  viewMode,
  width,
}: {
  density: IconDensity
  groups: IconGroup[]
  viewMode: IconViewMode
  width: number
}): LayoutResult {
  const isNarrow = width > 0 && width < RESULTS_NARROW_WIDTH
  const listRowHeight = isNarrow
    ? ROW_HEIGHTS.narrow[density]
    : ROW_HEIGHTS.wide[density]
  const gridRowHeight = GRID_CARD_HEIGHTS[density]
  const columns = viewMode === 'grid' ? getColumnCount(width, density) : 1
  const items: VirtualItem[] = []
  let offset = 0

  for (const group of groups) {
    if (group.families.length === 0) {
      continue
    }

    items.push({
      categoryId: group.categoryId,
      height: CATEGORY_HEADER_HEIGHT,
      offset,
      type: 'header',
    })
    offset += CATEGORY_HEADER_HEIGHT

    if (viewMode === 'list') {
      for (const family of group.families) {
        items.push({
          family,
          height: listRowHeight,
          offset,
          type: 'list-family',
        })
        offset += listRowHeight
      }
      continue
    }

    for (let index = 0; index < group.families.length; index += columns) {
      items.push({
        columns,
        families: group.families.slice(index, index + columns),
        height: gridRowHeight,
        offset,
        type: 'grid-row',
      })
      offset += gridRowHeight
    }
  }

  return {
    items,
    totalHeight: offset,
  }
}

function VariantButton({
  entry,
  iconSize,
  isSelected,
  onSelect,
}: {
  entry: IconEntry
  iconSize: number
  isSelected: boolean
  onSelect: (entry: IconEntry) => void
}) {
  return (
    <button
      aria-pressed={isSelected}
      className="variant-tile"
      onClick={() => onSelect(entry)}
      type="button"
    >
      <IconGlyph entry={entry} size={iconSize} />
      <span className="variant-name">{VARIANT_LABELS[entry.variant]}</span>
      <span className="variant-code">{entry.componentName}</span>
    </button>
  )
}

function FamilySummary({ family }: { family: IconFamily }) {
  return (
    <div className="family-summary">
      <h2>{family.displayName}</h2>
      <p>{family.id}</p>
      <span className="family-count">
        {family.variants.length}/{family.totalVariants}
      </span>
    </div>
  )
}

function VariantStrip({
  family,
  iconSize,
  isSelected,
  onSelect,
}: {
  family: IconFamily
  iconSize: number
  isSelected: (entry: IconEntry) => boolean
  onSelect: (entry: IconEntry) => void
}) {
  return (
    <div className="variant-strip">
      {family.variants.map((entry) => (
        <VariantButton
          entry={entry}
          iconSize={iconSize}
          isSelected={isSelected(entry)}
          key={entry.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

function FamilyRow({
  family,
  iconSize,
  isSelected,
  onSelect,
  style,
}: {
  family: IconFamily
  iconSize: number
  isSelected: (entry: IconEntry) => boolean
  onSelect: (entry: IconEntry) => void
  style: CSSProperties
}) {
  return (
    <li className="family-row" style={style}>
      <FamilySummary family={family} />
      <VariantStrip
        family={family}
        iconSize={iconSize}
        isSelected={isSelected}
        onSelect={onSelect}
      />
    </li>
  )
}

function FamilyCard({
  family,
  iconSize,
  isSelected,
  onSelect,
}: {
  family: IconFamily
  iconSize: number
  isSelected: (entry: IconEntry) => boolean
  onSelect: (entry: IconEntry) => void
}) {
  const preferredEntry =
    family.variants.find((entry) => isSelected(entry)) ?? family.variants[0]

  return (
    <article className="family-card">
      <button
        aria-label={`Select ${preferredEntry.componentName}`}
        className="family-card-preview"
        onClick={() => onSelect(preferredEntry)}
        type="button"
      >
        <IconGlyph entry={preferredEntry} size={iconSize} />
      </button>
      <FamilySummary family={family} />
      <VariantStrip
        family={family}
        iconSize={Math.max(
          GRID_VARIANT_ICON_MIN_SIZE,
          Math.round(iconSize * GRID_VARIANT_ICON_SCALE),
        )}
        isSelected={isSelected}
        onSelect={onSelect}
      />
    </article>
  )
}

function CategoryHeader({
  categoryId,
  style,
}: {
  categoryId: IconCategoryId
  style: CSSProperties
}) {
  return (
    <li className="category-header" style={style}>
      <h2>{CATEGORY_LABELS[categoryId]}</h2>
    </li>
  )
}

function GridRow({
  columns,
  families,
  iconSize,
  isSelected,
  onSelect,
  style,
}: {
  columns: number
  families: IconFamily[]
  iconSize: number
  isSelected: (entry: IconEntry) => boolean
  onSelect: (entry: IconEntry) => void
  style: CSSProperties
}) {
  return (
    <li
      className="grid-row"
      style={{
        ...style,
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {families.map((family) => (
        <FamilyCard
          family={family}
          iconSize={iconSize}
          isSelected={isSelected}
          key={family.id}
          onSelect={onSelect}
        />
      ))}
    </li>
  )
}

export function IconResults({
  density,
  groups,
  iconSize,
  onSelect,
  selected,
  viewMode,
}: IconResultsProps) {
  const [containerRef, size] = useMeasuredElement<HTMLDivElement>()
  const resetKey = useMemo(
    () =>
      [
        density,
        viewMode,
        groups
          .map(
            (group) =>
              `${group.categoryId}:${group.families.length}:${
                group.families[0]?.id ?? ''
              }`,
          )
          .join('|'),
      ].join(';'),
    [density, groups, viewMode],
  )
  const [scrollState, setScrollState] = useState({
    resetKey,
    top: 0,
  })
  const frameRef = useRef<number | null>(null)

  if (scrollState.resetKey !== resetKey) {
    setScrollState({
      resetKey,
      top: 0,
    })
  }

  const scrollTop = scrollState.resetKey === resetKey ? scrollState.top : 0
  const layout = useMemo(
    () =>
      buildVirtualLayout({
        density,
        groups,
        viewMode,
        width: size.width,
      }),
    [density, groups, size.width, viewMode],
  )
  const visiblePadding =
    Math.max(size.height, GRID_CARD_HEIGHTS[density]) *
    RESULTS_OVERSCAN *
    OVERSCAN_DIRECTIONS
  const visibleStart = Math.max(0, scrollTop - visiblePadding)
  const visibleEnd = scrollTop + size.height + visiblePadding
  const visibleItems = layout.items.filter(
    (item) =>
      item.offset + item.height >= visibleStart && item.offset <= visibleEnd,
  )
  const visibleFamilyCount = groups.reduce(
    (total, group) => total + group.families.length,
    0,
  )
  const visibleIconCount = groups.reduce(
    (total, group) =>
      total +
      group.families.reduce(
        (familyTotal, family) => familyTotal + family.variants.length,
        0,
      ),
    0,
  )

  const handleScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const nextScrollTop = event.currentTarget.scrollTop

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(() => {
        setScrollState({
          resetKey,
          top: nextScrollTop,
        })
        frameRef.current = null
      })
    },
    [resetKey],
  )

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  const isSelected = useCallback(
    (entry: IconEntry) => selected?.id === entry.id,
    [selected],
  )

  return (
    <section aria-labelledby="results-title" className="results-panel">
      <div className="results-heading">
        <h1 id="results-title">Icons</h1>
        <span>
          {visibleFamilyCount.toLocaleString()} families /{' '}
          {visibleIconCount.toLocaleString()} icons
        </span>
      </div>

      <div
        className={`results-list is-${viewMode}`}
        key={resetKey}
        onScroll={handleScroll}
        ref={containerRef}
      >
        <ul className="results-spacer" style={{ height: layout.totalHeight }}>
          {visibleItems.map((item) => {
            const style = {
              height: item.height,
              transform: `translateY(${item.offset}px)`,
            }

            if (item.type === 'header') {
              return (
                <CategoryHeader
                  categoryId={item.categoryId}
                  key={`${item.categoryId}-${item.offset}`}
                  style={style}
                />
              )
            }

            if (item.type === 'list-family') {
              return (
                <FamilyRow
                  family={item.family}
                  iconSize={iconSize}
                  isSelected={isSelected}
                  key={item.family.id}
                  onSelect={onSelect}
                  style={style}
                />
              )
            }

            return (
              <GridRow
                columns={item.columns}
                families={item.families}
                iconSize={iconSize}
                isSelected={isSelected}
                key={`${item.families[0]?.id ?? 'row'}-${item.offset}`}
                onSelect={onSelect}
                style={style}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}
