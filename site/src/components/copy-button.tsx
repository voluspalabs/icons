/* biome-ignore-all lint/nursery/noJsxPropsBind: Copy actions intentionally accept compact item-scoped handlers. */
import type { ComponentType, JSX, ReactNode } from 'react'

type CopyButtonProps = {
  children: ReactNode
  icon: ComponentType<JSX.IntrinsicElements['svg']>
  label: string
  onCopy: () => Promise<void> | void
  variant?: 'primary' | 'secondary'
}

export function CopyButton({
  children,
  icon: Icon,
  label,
  onCopy,
  variant = 'secondary',
}: CopyButtonProps) {
  return (
    <button
      aria-label={label}
      className={`copy-action is-${variant}`}
      onClick={() => void onCopy()}
      type="button"
    >
      <Icon aria-hidden="true" className="copy-action-icon" />
      <span>{children}</span>
    </button>
  )
}
