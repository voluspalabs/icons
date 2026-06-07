/* biome-ignore-all lint/nursery/noJsxPropsBind: Copy actions intentionally accept compact item-scoped handlers. */
import type { ReactNode } from 'react'

type CopyButtonProps = {
  children: ReactNode
  label: string
  onCopy: () => Promise<void> | void
}

export function CopyButton({ children, label, onCopy }: CopyButtonProps) {
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
