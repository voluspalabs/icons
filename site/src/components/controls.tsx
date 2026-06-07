/* biome-ignore-all lint/nursery/noJsxPropsBind: Control callbacks stay local to keep this compact toolbar readable. */
import {
  DEFAULT_ICON_SIZE,
  ICON_CATEGORIES,
  ICON_SIZE_MAX,
  ICON_SIZE_MIN,
  VARIANT_LABELS,
  VARIANT_ORDER,
} from '../constants'
import type {
  IconCategoryId,
  IconDensity,
  IconVariant,
  IconViewMode,
} from '../types'

type CategoryFilter = IconCategoryId | 'all'

type ControlsProps = {
  activeCategory: CategoryFilter
  activeVariants: Set<IconVariant>
  density: IconDensity
  iconSize: number
  onCategoryChange: (category: CategoryFilter) => void
  onDensityChange: (density: IconDensity) => void
  onIconSizeChange: (size: number) => void
  onQueryChange: (query: string) => void
  onToggleVariant: (variant: IconVariant) => void
  onViewModeChange: (viewMode: IconViewMode) => void
  query: string
  totalFamilies: number
  totalIcons: number
  viewMode: IconViewMode
}

export function Controls({
  activeCategory,
  activeVariants,
  density,
  iconSize,
  onCategoryChange,
  onDensityChange,
  onIconSizeChange,
  onQueryChange,
  onToggleVariant,
  onViewModeChange,
  query,
  totalFamilies,
  totalIcons,
  viewMode,
}: ControlsProps) {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">@voluspalabs/icons</p>
          <p className="inventory">
            {totalIcons.toLocaleString()} icons /{' '}
            {totalFamilies.toLocaleString()} families
          </p>
        </div>

        <div className="search-control">
          <label htmlFor="icon-search">Search</label>
          <div className="search-box">
            <input
              autoComplete="off"
              id="icon-search"
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="alert triangle, github, duo stroke..."
              type="search"
              value={query}
            />
            {query ? (
              <button
                aria-label="Clear search"
                className="clear-search"
                onClick={() => onQueryChange('')}
                type="button"
              >
                x
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <section aria-label="Icon controls" className="controls">
        <div className="control-group category-control">
          <label htmlFor="icon-category">Section</label>
          <select
            id="icon-category"
            onChange={(event) =>
              onCategoryChange(event.target.value as CategoryFilter)
            }
            value={activeCategory}
          >
            <option value="all">All sections</option>
            {ICON_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <span className="control-label">View</span>
          <div className="segmented-control">
            {(['grid', 'list'] as const).map((mode) => (
              <button
                aria-pressed={viewMode === mode}
                key={mode}
                onClick={() => onViewModeChange(mode)}
                type="button"
              >
                {mode === 'grid' ? 'Grid' : 'List'}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <span className="control-label">Variants</span>
          <div className="chip-row">
            {VARIANT_ORDER.map((variant) => (
              <button
                aria-pressed={activeVariants.has(variant)}
                className="filter-chip"
                key={variant}
                onClick={() => onToggleVariant(variant)}
                type="button"
              >
                {VARIANT_LABELS[variant]}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <span className="control-label">Density</span>
          <div className="segmented-control">
            {(['compact', 'comfortable'] as const).map((mode) => (
              <button
                aria-pressed={density === mode}
                key={mode}
                onClick={() => onDensityChange(mode)}
                type="button"
              >
                {mode === 'compact' ? 'Compact' : 'Comfortable'}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group size-control">
          <label htmlFor="icon-size">Size</label>
          <input
            id="icon-size"
            max={ICON_SIZE_MAX}
            min={ICON_SIZE_MIN}
            onChange={(event) =>
              onIconSizeChange(Number(event.target.value) || DEFAULT_ICON_SIZE)
            }
            type="range"
            value={iconSize}
          />
          <output htmlFor="icon-size">{iconSize}px</output>
        </div>
      </section>
    </>
  )
}
