import type { CSSProperties } from "react";

import type { IconDensity } from "./types";

export const RESULTS_NARROW_WIDTH = 760;
export const RESULTS_OVERSCAN = 4;
export const OVERSCAN_DIRECTIONS = 2;
export const CATEGORY_HEADER_HEIGHT = 40;
export const DETAIL_PREVIEW_MIN_SIZE = 96;
export const DETAIL_PREVIEW_SCALE = 2.6;

// Hairline that separates every cell. Rows are absolutely positioned by the
// virtualizer, so a border on a row consumes part of that row's declared
// height — it has to be accounted for, not ignored.
const HAIRLINE = 1;

// ---------------------------------------------------------------------------
// Cell metrics.
//
// Single source of truth for results geometry. `resultsStyle` publishes these
// to CSS as custom properties, and the heights below are derived from the same
// arithmetic — so a padding change cannot be made in one place and silently
// desync the virtualizer from what actually paints.
// ---------------------------------------------------------------------------

const CARD_PAD: Record<IconDensity, number> = {
  comfortable: 18,
  compact: 14,
};

const CARD_GAP: Record<IconDensity, number> = {
  comfortable: 12,
  compact: 10,
};

// Display name (17) + 2 gap + slug (15).
const CARD_META = 34;

const CARD_STRIP: Record<IconDensity, number> = {
  comfortable: 34,
  compact: 30,
};

// Floor for the dot-grid preview well. The well also has to clear the glyph
// itself, so the effective value is the larger of the two — see `cardPreview`.
const CARD_PREVIEW_BASE: Record<IconDensity, number> = {
  comfortable: 108,
  compact: 76,
};

const PREVIEW_GLYPH_INSET = 28;

const LIST_PAD_Y: Record<IconDensity, number> = {
  comfortable: 18,
  compact: 12,
};

const LIST_PAD_X = 16;
const LIST_GAP = 12;

// Family name (18) + 2 gap + slug (16) — the stacked summary in narrow mode.
const LIST_SUMMARY = 36;

const TILE_PAD = 9;

// Variant label (17) + 2 gap + component name (15), stacked beside the glyph.
const TILE_LABELS = 34;

const cardPreview = (density: IconDensity, iconSize: number) =>
  Math.max(CARD_PREVIEW_BASE[density], iconSize + PREVIEW_GLYPH_INSET);

const tileHeight = (iconSize: number) =>
  TILE_PAD * 2 + Math.max(iconSize, TILE_LABELS);

export const getGridCardHeight = (density: IconDensity, iconSize: number) =>
  CARD_PAD[density] * 2 +
  cardPreview(density, iconSize) +
  CARD_GAP[density] +
  CARD_META +
  CARD_GAP[density] +
  CARD_STRIP[density] +
  HAIRLINE;

export const getListRowHeight = (
  density: IconDensity,
  iconSize: number,
  isNarrow: boolean
) => {
  const body = isNarrow
    ? LIST_SUMMARY + LIST_GAP + tileHeight(iconSize)
    : tileHeight(iconSize);

  return LIST_PAD_Y[density] * 2 + body + HAIRLINE;
};

// Mirrors the metrics above into CSS. Every padding, gap, and track in the
// results stylesheet reads from these, so the numbers the virtualizer reserves
// and the numbers the browser lays out are the same numbers.
export const resultsStyle = (
  density: IconDensity,
  iconSize: number
): CSSProperties =>
  ({
    "--card-gap": `${CARD_GAP[density]}px`,
    "--card-meta": `${CARD_META}px`,
    "--card-pad": `${CARD_PAD[density]}px`,
    "--card-preview": `${cardPreview(density, iconSize)}px`,
    "--card-strip": `${CARD_STRIP[density]}px`,
    "--list-gap": `${LIST_GAP}px`,
    "--list-pad-x": `${LIST_PAD_X}px`,
    "--list-pad-y": `${LIST_PAD_Y[density]}px`,
    "--list-summary": `${LIST_SUMMARY}px`,
    "--tile-labels": `${TILE_LABELS}px`,
    "--tile-pad": `${TILE_PAD}px`,
  }) as CSSProperties;

// Column count is unchanged in intent, but cells now tile flush (gap: 0) with
// no row padding, so the measured width maps exactly onto card width with
// nothing left over.
export const GRID_MIN_CARD_WIDTHS: Record<IconDensity, number> = {
  comfortable: 232,
  compact: 192,
};

// Upper bound on card width. Cards are kept under this so a full row of variant
// swatches always spans edge-to-edge instead of floating in a wide card.
export const GRID_MAX_CARD_WIDTHS: Record<IconDensity, number> = {
  comfortable: 312,
  compact: 280,
};

// Variant swatches in a grid card sit in a single non-wrapping row, so they
// stay small and independent of the preview size to avoid clipping.
export const GRID_VARIANT_ICON_MIN_SIZE = 16;
export const GRID_VARIANT_ICON_MAX_SIZE = 22;
export const GRID_VARIANT_ICON_SCALE = 0.6;
