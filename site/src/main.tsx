/* biome-ignore-all lint/nursery/noJsxPropsBind: This screen uses compact item-scoped handlers for visible virtual rows and controls. */
import {
  type CSSProperties,
  createElement,
  type JSX,
  type ReactNode,
  type UIEvent,
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import './styles.css'

type IconComponent = (props: JSX.IntrinsicElements['svg']) => JSX.Element
type IconModule = Record<string, IconComponent>
type IconLoader = () => Promise<IconModule>

type IconVariant =
  | 'contrast'
  | 'duo-solid'
  | 'duo-stroke'
  | 'other'
  | 'solid'
  | 'stroke'

type IconEntry = {
  baseSlug: string
  componentName: string
  displayName: string
  fileName: string
  id: string
  importPath: string
  modulePath: string
  searchText: string
  variant: IconVariant
}

type IconFamily = {
  displayName: string
  id: string
  searchText: string
  totalVariants: number
  variants: IconEntry[]
}

const VARIANT_ORDER: IconVariant[] = [
  'stroke',
  'duo-stroke',
  'solid',
  'duo-solid',
  'contrast',
  'other',
]

const VARIANT_MATCH_ORDER: IconVariant[] = [
  'duo-stroke',
  'duo-solid',
  'contrast',
  'stroke',
  'solid',
]

const VARIANT_LABELS: Record<IconVariant, string> = {
  contrast: 'Contrast',
  'duo-solid': 'Duo solid',
  'duo-stroke': 'Duo stroke',
  other: 'Other',
  solid: 'Solid',
  stroke: 'Stroke',
}

const WORD_LABELS: Record<string, string> = {
  ai: 'AI',
  api: 'API',
  css: 'CSS',
  eurc: 'EURC',
  figma: 'Figma',
  github: 'GitHub',
  html: 'HTML',
  jpg: 'JPG',
  npm: 'NPM',
  pdf: 'PDF',
  qr: 'QR',
  rx: 'Rx',
  sdk: 'SDK',
  seo: 'SEO',
  svg: 'SVG',
  tsx: 'TSX',
  ui: 'UI',
  url: 'URL',
  usd: 'USD',
  usdt: 'USDT',
  vscode: 'VS Code',
}

const PI_PREFIX_PATTERN = /^pi-/
const TSX_EXTENSION_PATTERN = /\.tsx$/
const WHITESPACE_PATTERN = /\s+/g
const RESULTS_NARROW_WIDTH = 760
const RESULTS_OVERSCAN = 4
const OVERSCAN_DIRECTIONS = 2
const ROW_HEIGHTS = {
  narrow: {
    comfortable: 252,
    compact: 212,
  },
  wide: {
    comfortable: 148,
    compact: 116,
  },
} as const
const DETAIL_PREVIEW_MIN_SIZE = 64
const DETAIL_PREVIEW_SCALE = 1.8
const DEFAULT_ICON_SIZE = 32
const ICON_SIZE_MIN = 20
const ICON_SIZE_MAX = 48
const COPY_STATUS_DURATION_MS = 1800

const iconLoaders = import.meta.glob('../../src/pi-*.tsx') as Record<
  string,
  IconLoader
>

const componentCache = new Map<string, IconComponent>()
const loadCache = new Map<string, Promise<IconComponent>>()

function getVariant(slug: string): IconVariant {
  for (const variant of VARIANT_MATCH_ORDER) {
    if (slug.endsWith(`-${variant}`)) {
      return variant
    }
  }

  return 'other'
}

function removeVariant(slug: string, variant: IconVariant) {
  return variant === 'other' ? slug : slug.replace(`-${variant}`, '')
}

function toComponentName(fileName: string) {
  return fileName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function toDisplayName(slug: string) {
  return slug
    .replace(PI_PREFIX_PATTERN, '')
    .split('-')
    .map((word) => {
      const label = WORD_LABELS[word]

      if (label) {
        return label
      }

      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(WHITESPACE_PATTERN, ' ')
}

function matchesSearch(searchText: string, query: string) {
  if (!query) {
    return true
  }

  return query.split(' ').every((term) => searchText.includes(term))
}

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
      const componentName = toComponentName(fileName)
      const displayName = toDisplayName(baseSlug)
      const importPath = `@voluspalabs/icons/${fileName}`
      const searchText = normalizeSearch(
        [
          fileName,
          componentName,
          displayName,
          baseSlug,
          variant,
          VARIANT_LABELS[variant],
        ].join(' '),
      )

      return {
        baseSlug,
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
    .sort((left, right) => left.displayName.localeCompare(right.displayName))
}

const CATALOG = buildCatalog()
const TOTAL_ICONS = CATALOG.reduce(
  (total, family) => total + family.totalVariants,
  0,
)

function loadIcon(entry: IconEntry) {
  const cached = componentCache.get(entry.id)

  if (cached) {
    return cached
  }

  const pending = loadCache.get(entry.id)

  if (pending) {
    return pending
  }

  const loader = iconLoaders[entry.modulePath]

  if (!loader) {
    throw new Error(`Icon module was not found: ${entry.modulePath}`)
  }

  const promise = loader().then((iconModule) => {
    const Icon = iconModule[entry.componentName]

    if (!Icon) {
      throw new Error(`Icon export was not found: ${entry.componentName}`)
    }

    componentCache.set(entry.id, Icon)
    return Icon
  })

  loadCache.set(entry.id, promise)
  return promise
}

function IconGlyph({ entry, size }: { entry: IconEntry; size: number }) {
  const [Icon, setIcon] = useState<IconComponent | null>(
    () => componentCache.get(entry.id) ?? null,
  )

  useEffect(() => {
    let isCurrent = true

    setIcon(componentCache.get(entry.id) ?? null)
    loadIcon(entry)
      .then((loadedIcon) => {
        if (isCurrent) {
          setIcon(() => loadedIcon)
        }
      })
      .catch(() => {
        if (isCurrent) {
          setIcon(null)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [entry])

  if (!Icon) {
    return (
      <span
        aria-hidden="true"
        className="icon-placeholder"
        style={{ height: size, width: size }}
      />
    )
  }

  return (
    <Icon
      aria-hidden="true"
      className="icon-svg"
      focusable="false"
      style={{ height: size, width: size }}
    />
  )
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

function IconFamilyRow({
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
      <div className="family-summary">
        <h2>{family.displayName}</h2>
        <p>{family.id}</p>
        <span className="family-count">
          {family.variants.length}/{family.totalVariants}
        </span>
      </div>

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
    </li>
  )
}

function useMeasuredElement<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ height: 0, width: 0 })

  useLayoutEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const updateSize = () => {
      setSize({
        height: element.clientHeight,
        width: element.clientWidth,
      })
    }

    updateSize()

    const observer = new ResizeObserver(updateSize)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return [ref, size] as const
}

function IconResults({
  density,
  iconSize,
  onSelect,
  rows,
  selected,
}: {
  density: 'comfortable' | 'compact'
  iconSize: number
  onSelect: (entry: IconEntry) => void
  rows: IconFamily[]
  selected: IconEntry | null
}) {
  const [containerRef, size] = useMeasuredElement<HTMLDivElement>()
  const [scrollTop, setScrollTop] = useState(0)
  const frameRef = useRef<number | null>(null)
  const isNarrow = size.width > 0 && size.width < RESULTS_NARROW_WIDTH
  const rowHeight = isNarrow
    ? ROW_HEIGHTS.narrow[density]
    : ROW_HEIGHTS.wide[density]
  const totalHeight = rows.length * rowHeight
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / rowHeight) - RESULTS_OVERSCAN,
  )
  const visibleCount =
    Math.ceil(size.height / rowHeight) + RESULTS_OVERSCAN * OVERSCAN_DIRECTIONS
  const endIndex = Math.min(rows.length, startIndex + visibleCount)
  const visibleRows = rows.slice(startIndex, endIndex)

  const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
    const nextScrollTop = event.currentTarget.scrollTop

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      setScrollTop(nextScrollTop)
      frameRef.current = null
    })
  }, [])

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  useEffect(() => {
    setScrollTop(0)

    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [containerRef, density, rows])

  const isSelected = useCallback(
    (entry: IconEntry) => selected?.id === entry.id,
    [selected],
  )

  return (
    <section aria-labelledby="results-title" className="results-panel">
      <div className="results-heading">
        <h1 id="results-title">Icons</h1>
        <span>
          {rows.length.toLocaleString()} families /{' '}
          {rows
            .reduce((total, family) => total + family.variants.length, 0)
            .toLocaleString()}{' '}
          icons
        </span>
      </div>

      <div className="results-list" onScroll={handleScroll} ref={containerRef}>
        <ul className="results-spacer" style={{ height: totalHeight }}>
          {visibleRows.map((family, offset) => {
            const index = startIndex + offset

            return (
              <IconFamilyRow
                family={family}
                iconSize={iconSize}
                isSelected={isSelected}
                key={family.id}
                onSelect={onSelect}
                style={{
                  height: rowHeight,
                  transform: `translateY(${index * rowHeight}px)`,
                }}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function CopyButton({
  children,
  label,
  onCopy,
}: {
  children: ReactNode
  label: string
  onCopy: () => Promise<void> | void
}) {
  return (
    <button
      aria-label={label}
      className="copy-action"
      onClick={() => void onCopy()}
      type="button"
    >
      {children}
    </button>
  )
}

function IconDetail({
  copiedLabel,
  iconSize,
  onCopy,
  selected,
}: {
  copiedLabel: string
  iconSize: number
  onCopy: (text: string, label: string) => Promise<void>
  selected: IconEntry | null
}) {
  if (!selected) {
    return (
      <aside aria-label="Selected icon" className="detail-panel">
        <p className="empty-state">No icons match the current filters.</p>
      </aside>
    )
  }

  const namedImport = `import { ${selected.componentName} } from '@voluspalabs/icons'`
  const subpathImport = `import { ${selected.componentName} } from '${selected.importPath}'`
  const jsxUsage = `<${selected.componentName} aria-hidden="true" className="icon" />`
  const componentSnippet = `${namedImport}\n\n${jsxUsage}`

  const copyRawSvg = async () => {
    const Icon = await loadIcon(selected)
    const host = document.createElement('div')
    host.hidden = true
    document.body.append(host)

    const root = createRoot(host)
    flushSync(() => {
      root.render(
        createElement(Icon, {
          'aria-hidden': 'true',
          className: 'icon',
          focusable: 'false',
        }),
      )
    })

    const svg = host.querySelector('svg')?.outerHTML ?? ''
    root.unmount()
    host.remove()

    await onCopy(svg, 'SVG copied')
  }

  return (
    <aside aria-label="Selected icon" className="detail-panel">
      <div className="preview-box">
        <IconGlyph
          entry={selected}
          size={Math.max(
            DETAIL_PREVIEW_MIN_SIZE,
            iconSize * DETAIL_PREVIEW_SCALE,
          )}
        />
      </div>

      <div className="detail-title">
        <p>{VARIANT_LABELS[selected.variant]}</p>
        <h2>{selected.componentName}</h2>
        <span>{selected.fileName}</span>
      </div>

      <div className="copy-grid">
        <CopyButton
          label={`Copy component snippet for ${selected.componentName}`}
          onCopy={() => onCopy(componentSnippet, 'Component copied')}
        >
          Component
        </CopyButton>
        <CopyButton
          label={`Copy named import for ${selected.componentName}`}
          onCopy={() => onCopy(namedImport, 'Import copied')}
        >
          Import
        </CopyButton>
        <CopyButton
          label={`Copy subpath import for ${selected.componentName}`}
          onCopy={() => onCopy(subpathImport, 'Subpath copied')}
        >
          Subpath
        </CopyButton>
        <CopyButton
          label={`Copy raw SVG for ${selected.componentName}`}
          onCopy={copyRawSvg}
        >
          SVG
        </CopyButton>
      </div>

      <pre className="code-preview">
        <code>{componentSnippet}</code>
      </pre>

      <p aria-live="polite" className="copy-status">
        {copiedLabel}
      </p>
    </aside>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const [activeVariants, setActiveVariants] = useState(
    () => new Set<IconVariant>(VARIANT_ORDER),
  )
  const [density, setDensity] = useState<'comfortable' | 'compact'>('compact')
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
          (matchesSearch(family.searchText, normalizedQuery) ||
            family.variants.some((entry) =>
              matchesSearch(entry.searchText, normalizedQuery),
            )),
      ),
    [activeVariants, normalizedQuery],
  )

  useEffect(() => {
    const selectedIsVisible = filteredFamilies.some((family) =>
      family.variants.some((entry) => entry.id === selected?.id),
    )

    if (!selectedIsVisible) {
      setSelected(filteredFamilies[0]?.variants[0] ?? null)
    }
  }, [filteredFamilies, selected])

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
      <header className="topbar">
        <div>
          <p className="eyebrow">@voluspalabs/icons</p>
          <p className="inventory">
            {TOTAL_ICONS.toLocaleString()} icons /{' '}
            {CATALOG.length.toLocaleString()} families
          </p>
        </div>

        <div className="search-control">
          <label htmlFor="icon-search">Search</label>
          <div className="search-box">
            <input
              autoComplete="off"
              id="icon-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="alert triangle, github, duo stroke..."
              type="search"
              value={query}
            />
            {query ? (
              <button
                aria-label="Clear search"
                className="clear-search"
                onClick={() => setQuery('')}
                type="button"
              >
                ×
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <section aria-label="Icon controls" className="controls">
        <div className="control-group">
          <span className="control-label">Variants</span>
          <div className="chip-row">
            {VARIANT_ORDER.map((variant) => (
              <button
                aria-pressed={activeVariants.has(variant)}
                className="filter-chip"
                key={variant}
                onClick={() => toggleVariant(variant)}
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
                onClick={() => setDensity(mode)}
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
            onChange={(event) => setIconSize(Number(event.target.value))}
            type="range"
            value={iconSize}
          />
          <output htmlFor="icon-size">{iconSize}px</output>
        </div>
      </section>

      <div className="workspace">
        <IconResults
          density={density}
          iconSize={iconSize}
          onSelect={setSelected}
          rows={filteredFamilies}
          selected={selected}
        />
        <IconDetail
          copiedLabel={copiedLabel}
          iconSize={iconSize}
          onCopy={copyText}
          selected={selected}
        />
      </div>
    </main>
  )
}

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element was not found.')
}

const appRoot = createRoot(root)
appRoot.render(<App />)

if (import.meta.hot) {
  import.meta.hot.dispose(() => appRoot.unmount())
}
