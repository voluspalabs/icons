/* biome-ignore-all lint/nursery/noJsxPropsBind: Copy snippets are derived per selected icon. */
import { createElement } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { VARIANT_LABELS } from '../../../shared/icon-taxonomy'
import { loadIcon } from '../icon-loader'
import { DETAIL_PREVIEW_MIN_SIZE, DETAIL_PREVIEW_SCALE } from '../layout'
import type { IconEntry, IconFamily } from '../types'
import {
  PiCheckTickCircleStroke,
  PiCodeStroke,
  PiCopyDefaultStroke,
  PiFileCodeStroke,
  PiTagStroke,
} from '../ui-icons'
import { CopyButton } from './copy-button'
import { IconGlyph } from './icon-glyph'

type IconDetailProps = {
  copiedLabel: string
  family: IconFamily | null
  iconSize: number
  onCopy: (text: string, label: string) => Promise<void>
  onSelect: (entry: IconEntry) => void
  selected: IconEntry | null
}

export function IconDetail({
  copiedLabel,
  family,
  iconSize,
  onCopy,
  onSelect,
  selected,
}: IconDetailProps) {
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
  const previewSize = Math.max(
    DETAIL_PREVIEW_MIN_SIZE,
    iconSize * DETAIL_PREVIEW_SCALE,
  )
  const variants = family?.variants ?? [selected]

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
        <span className="preview-badge">
          {VARIANT_LABELS[selected.variant]}
        </span>
        <IconGlyph entry={selected} size={previewSize} />
      </div>

      <div className="detail-title">
        <h2>{selected.componentName}</h2>
        <span>{selected.fileName}</span>
      </div>

      {variants.length > 1 ? (
        <div className="variant-switcher">
          {variants.map((entry) => (
            <button
              aria-label={VARIANT_LABELS[entry.variant]}
              aria-pressed={entry.id === selected.id}
              className="variant-switch"
              key={entry.id}
              onClick={() => onSelect(entry)}
              type="button"
            >
              <IconGlyph entry={entry} size={22} />
              <span>{VARIANT_LABELS[entry.variant]}</span>
            </button>
          ))}
        </div>
      ) : null}

      <div className="copy-grid">
        <CopyButton
          icon={PiCodeStroke}
          label={`Copy component snippet for ${selected.componentName}`}
          onCopy={() => onCopy(componentSnippet, 'Component copied')}
          variant="primary"
        >
          Component
        </CopyButton>
        <CopyButton
          icon={PiCopyDefaultStroke}
          label={`Copy named import for ${selected.componentName}`}
          onCopy={() => onCopy(namedImport, 'Import copied')}
        >
          Import
        </CopyButton>
        <CopyButton
          icon={PiTagStroke}
          label={`Copy subpath import for ${selected.componentName}`}
          onCopy={() => onCopy(subpathImport, 'Subpath copied')}
        >
          Subpath
        </CopyButton>
        <CopyButton
          icon={PiFileCodeStroke}
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
        {copiedLabel ? (
          <>
            <PiCheckTickCircleStroke aria-hidden="true" />
            {copiedLabel}
          </>
        ) : null}
      </p>
    </aside>
  )
}
