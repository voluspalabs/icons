/* biome-ignore-all lint/nursery/noJsxPropsBind: Copy snippets are derived per selected icon. */
import { createElement } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { VARIANT_LABELS } from '../constants'
import { loadIcon } from '../icon-loader'
import { DETAIL_PREVIEW_MIN_SIZE, DETAIL_PREVIEW_SCALE } from '../layout'
import type { IconEntry } from '../types'
import { CopyButton } from './copy-button'
import { IconGlyph } from './icon-glyph'

type IconDetailProps = {
  copiedLabel: string
  iconSize: number
  onCopy: (text: string, label: string) => Promise<void>
  selected: IconEntry | null
}

export function IconDetail({
  copiedLabel,
  iconSize,
  onCopy,
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
