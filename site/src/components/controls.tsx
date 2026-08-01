import {
  ICON_CATEGORIES,
  VARIANT_LABELS,
  VARIANT_ORDER,
} from "../../../shared/icon-taxonomy";
import { CATEGORY_STATS } from "../catalog";
import { DEFAULT_ICON_SIZE, ICON_SIZE_MAX, ICON_SIZE_MIN } from "../constants";
import type { ThemeChoice } from "../hooks/use-theme";
import type {
  IconCategoryId,
  IconDensity,
  IconVariant,
  IconViewMode,
} from "../types";
import {
  PiArrowRightStroke,
  PiArrowTurnDownRightStroke,
  PiCrossCircleStroke,
  PiFilterFunnelStroke,
  PiGithubStroke,
  PiGrid01Stroke,
  PiListDefaultStroke,
  PiMoonStroke,
  PiSearchBigStroke,
  PiSunStroke,
} from "../ui-icons";
import { Tick } from "./tick";

type CategoryFilter = IconCategoryId | "all";

interface ControlsProps {
  activeCategory: CategoryFilter;
  activeVariants: Set<IconVariant>;
  density: IconDensity;
  iconSize: number;
  onCategoryChange: (category: CategoryFilter) => void;
  onDensityChange: (density: IconDensity) => void;
  onIconSizeChange: (size: number) => void;
  onQueryChange: (query: string) => void;
  onThemeToggle: () => void;
  onToggleVariant: (variant: IconVariant) => void;
  onViewModeChange: (viewMode: IconViewMode) => void;
  query: string;
  theme: ThemeChoice;
  totalFamilies: number;
  totalIcons: number;
  viewMode: IconViewMode;
}

const VIEW_OPTIONS = [
  { icon: PiGrid01Stroke, label: "Grid", mode: "grid" },
  { icon: PiListDefaultStroke, label: "List", mode: "list" },
] as const;

const THEME_LABELS: Record<ThemeChoice, string> = {
  dark: "Dark",
  light: "Light",
  system: "Auto",
};

const THOUSAND = 1000;

const compactNumber = (value: number) =>
  value >= THOUSAND ? `${(value / THOUSAND).toFixed(1)}k` : `${value}`;

/**
 * Unakomi group logomark. Voluspa is an Unakomi company, so the parent mark
 * carries the masthead and the wordmark beside it names the product.
 */
const BrandMark = () => (
  <svg
    aria-hidden="true"
    className="brand-mark"
    fill="currentColor"
    viewBox="0 0 198 92"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M68.64 2.11V57.03C68.64 61.49 64.81 65.48 58.74 65.48H26.8V2.11H2.9V89.65H64.55V71.23C64.55 67.47 68.51 62.31 74.71 62.31H93.85V2.11H68.64Z" />
    <path d="M176.88 29.34C171.47 29.34 166.85 26.29 166.85 20.3V2.11H103.36V89.65H129.1V26.05H160.51C165.4 26.05 171.2 29.1 171.2 35.09V89.65H194.96V29.45H176.88V29.34Z" />
  </svg>
);

export const Controls = ({
  activeCategory,
  activeVariants,
  density,
  iconSize,
  onCategoryChange,
  onDensityChange,
  onIconSizeChange,
  onQueryChange,
  onThemeToggle,
  onToggleVariant,
  onViewModeChange,
  query,
  theme,
  totalFamilies,
  totalIcons,
  viewMode,
}: ControlsProps) => (
  <>
    <header className="topbar">
      <div className="brand">
        <BrandMark />
        <p className="wordmark">Voluspa Icons</p>
      </div>

      <p className="inventory mono-label">
        <Tick icon={PiArrowTurnDownRightStroke} />
        <b>{totalIcons.toLocaleString()}</b> icons ·{" "}
        <b>{totalFamilies.toLocaleString()}</b> families ·{" "}
        {VARIANT_ORDER.length} variants
      </p>

      <button
        aria-label={`Theme: ${THEME_LABELS[theme]}. Switch theme.`}
        className="theme-toggle"
        onClick={onThemeToggle}
        type="button"
      >
        {theme === "dark" ? (
          <PiMoonStroke aria-hidden="true" />
        ) : (
          <PiSunStroke aria-hidden="true" />
        )}
        <span>{THEME_LABELS[theme]}</span>
      </button>

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
    </header>

    <div className="search-row">
      <span className="search-label mono-label">
        <Tick icon={PiArrowRightStroke} />
        Search
      </span>

      <div className="search-box">
        <PiSearchBigStroke aria-hidden="true" className="search-icon" />
        <input
          aria-label="Search icons by name, family, or variant"
          autoComplete="off"
          id="icon-search"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="alert triangle, github, duo stroke…"
          type="search"
          value={query}
        />
        {query ? (
          <button
            aria-label="Clear search"
            className="clear-search"
            onClick={() => onQueryChange("")}
            type="button"
          >
            <PiCrossCircleStroke aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>

    <nav aria-label="Filter by category" className="category-bar">
      <button
        aria-pressed={activeCategory === "all"}
        className="category-pill"
        onClick={() => onCategoryChange("all")}
        type="button"
      >
        <span>All</span>
        <span className="pill-count">{compactNumber(totalFamilies)}</span>
      </button>

      {ICON_CATEGORIES.map((category) => {
        const stat = CATEGORY_STATS.get(category.id);

        if (!stat) {
          return null;
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
            <span>{category.label}</span>
            <span className="pill-count">{compactNumber(stat.families)}</span>
          </button>
        );
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
          {(["compact", "comfortable"] as const).map((mode) => (
            <button
              aria-pressed={density === mode}
              key={mode}
              onClick={() => onDensityChange(mode)}
              type="button"
            >
              {mode === "compact" ? "Compact" : "Comfort"}
            </button>
          ))}
        </div>
      </div>

      <div className="control-group size-control">
        <label className="control-label" htmlFor="icon-size">
          Size
        </label>
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
);
