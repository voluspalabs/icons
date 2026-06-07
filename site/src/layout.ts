import type { IconDensity } from './types'

export const RESULTS_NARROW_WIDTH = 760
export const RESULTS_OVERSCAN = 4
export const OVERSCAN_DIRECTIONS = 2
export const CATEGORY_HEADER_HEIGHT = 46
export const DETAIL_PREVIEW_MIN_SIZE = 96
export const DETAIL_PREVIEW_SCALE = 2.6

export const ROW_HEIGHTS: Record<
  'narrow' | 'wide',
  Record<IconDensity, number>
> = {
  narrow: {
    comfortable: 252,
    compact: 212,
  },
  wide: {
    comfortable: 148,
    compact: 116,
  },
}

export const GRID_CARD_HEIGHTS: Record<IconDensity, number> = {
  comfortable: 232,
  compact: 192,
}

export const GRID_MIN_CARD_WIDTHS: Record<IconDensity, number> = {
  comfortable: 232,
  compact: 192,
}

// Upper bound on card width. Cards are kept under this so a full row of variant
// swatches always spans edge-to-edge instead of floating in a wide card.
export const GRID_MAX_CARD_WIDTHS: Record<IconDensity, number> = {
  comfortable: 312,
  compact: 280,
}

// Variant swatches in a grid card sit in a single non-wrapping row, so they
// stay small and independent of the preview size to avoid clipping.
export const GRID_VARIANT_ICON_MIN_SIZE = 16
export const GRID_VARIANT_ICON_MAX_SIZE = 22
export const GRID_VARIANT_ICON_SCALE = 0.6
