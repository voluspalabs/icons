import type { IconDensity } from './types'

export const RESULTS_NARROW_WIDTH = 760
export const RESULTS_OVERSCAN = 4
export const OVERSCAN_DIRECTIONS = 2
export const CATEGORY_HEADER_HEIGHT = 42
export const DETAIL_PREVIEW_MIN_SIZE = 64
export const DETAIL_PREVIEW_SCALE = 1.8

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
  comfortable: 218,
  compact: 176,
}

export const GRID_MIN_CARD_WIDTHS: Record<IconDensity, number> = {
  comfortable: 220,
  compact: 184,
}

export const GRID_VARIANT_ICON_MIN_SIZE = 20
export const GRID_VARIANT_ICON_SCALE = 0.75
