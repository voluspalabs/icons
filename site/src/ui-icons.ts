// biome-ignore-all lint/performance/noBarrelFile: Curated 12-glyph chrome barrel; each glyph is imported from its own module so the full catalog stays out of the dev graph.
// Dogfooding: the gallery's own chrome is built from @voluspalabs/icons.
// Imported via direct module paths (not the barrel) so Vite only loads the
// handful of glyphs the UI actually uses instead of the full 4,000+ catalog.
export { PiCheckTickCircleStroke } from '../../src/pi-check-tick-circle-stroke'
export { PiChevronDownStroke } from '../../src/pi-chevron-down-stroke'
export { PiCodeStroke } from '../../src/pi-code-stroke'
export { PiCopyCopiedStroke } from '../../src/pi-copy-copied-stroke'
export { PiCopyDefaultStroke } from '../../src/pi-copy-default-stroke'
export { PiCrossCircleStroke } from '../../src/pi-cross-circle-stroke'
export { PiFileCodeStroke } from '../../src/pi-file-code-stroke'
export { PiFilterFunnelStroke } from '../../src/pi-filter-funnel-stroke'
export { PiGithubStroke } from '../../src/pi-github-stroke'
export { PiGrid01Stroke } from '../../src/pi-grid01-stroke'
export { PiListDefaultStroke } from '../../src/pi-list-default-stroke'
export { PiSearchBigStroke } from '../../src/pi-search-big-stroke'
export { PiTagStroke } from '../../src/pi-tag-stroke'
