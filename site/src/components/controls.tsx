/* biome-ignore-all lint/nursery/noJsxPropsBind: Control callbacks stay local to keep this compact toolbar readable. */
import { CATEGORY_STATS } from '../catalog'
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
import {
  PiCrossCircleStroke,
  PiFilterFunnelStroke,
  PiGithubStroke,
  PiGrid01Stroke,
  PiListDefaultStroke,
  PiSearchBigStroke,
} from '../ui-icons'

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

const VIEW_OPTIONS = [
  { icon: PiGrid01Stroke, label: 'Grid', mode: 'grid' },
  { icon: PiListDefaultStroke, label: 'List', mode: 'list' },
] as const

const THOUSAND = 1000

const compactNumber = (value: number) =>
  value >= THOUSAND ? `${(value / THOUSAND).toFixed(1)}k` : `${value}`

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
        <div className="brand">
          <div className="brand-head">
            <p className="eyebrow">@voluspalabs/icons</p>
            <a
              aria-label="View @voluspalabs/icons on GitHub"
              className="github-link"
              href="https://github.com/voluspalabs/icons"
              rel="noreferrer"
              target="_blank"
            >
              <PiGithubStroke aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="inventory">
            <strong>{totalIcons.toLocaleString()}</strong> icons
            <span className="inventory-sep">across</span>
            <strong>{totalFamilies.toLocaleString()}</strong> families
          </p>
        </div>

        <div className="search-control">
          <div className="search-box">
            <PiSearchBigStroke aria-hidden="true" className="search-icon" />
            <input
              aria-label="Search icons by name, family, or variant"
              autoComplete="off"
              id="icon-search"
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search 4,000+ icons — alert triangle, github, duo stroke…"
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
                <PiCrossCircleStroke aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <nav aria-label="Filter by category" className="category-bar">
        <button
          aria-pressed={activeCategory === 'all'}
          className="category-pill"
          onClick={() => onCategoryChange('all')}
          type="button"
        >
          <span className="pill-label">All sections</span>
          <span className="pill-count">{compactNumber(totalFamilies)}</span>
        </button>

        {ICON_CATEGORIES.map((category) => {
          const stat = CATEGORY_STATS.get(category.id)

          if (!stat) {
            return null
          }

          return (
            <button
              aria-pressed={activeCategory === category.id}
              className="category-pill"
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              title={category.description}
              type="button"
            >
              <span className="pill-label">{category.label}</span>
              <span className="pill-count">{compactNumber(stat.families)}</span>
            </button>
          )
        })}
      </nav>

      <section aria-label="Display controls" className="controls">
        <div className="control-group">
          <span className="control-label">View</span>
          <div className="segmented-control">
            {VIEW_OPTIONS.map(({ icon: Icon, label, mode }) => (
              <button
                aria-pressed={viewMode === mode}
                key={mode}
                onClick={() => onViewModeChange(mode)}
                type="button"
              >
                <Icon aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group variant-control">
          <span className="control-label">
            <PiFilterFunnelStroke aria-hidden="true" />
            Variants
          </span>
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
