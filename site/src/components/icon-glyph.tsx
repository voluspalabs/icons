import { memo, useEffect, useState } from 'react'
import { getCachedIcon, loadIcon } from '../icon-loader'
import type { IconComponent, IconEntry } from '../types'

type IconGlyphProps = {
  entry: IconEntry
  size: number
}

type IconGlyphState = {
  failed: boolean
  Icon: IconComponent | null
}

export const IconGlyph = memo(function IconGlyph({
  entry,
  size,
}: IconGlyphProps) {
  const [{ Icon, failed }, setGlyphState] = useState<IconGlyphState>(() => ({
    failed: false,
    Icon: getCachedIcon(entry),
  }))

  useEffect(() => {
    let isCurrent = true

    const cachedIcon = getCachedIcon(entry)

    setGlyphState({ failed: false, Icon: cachedIcon })
    loadIcon(entry)
      .then((loadedIcon) => {
        if (isCurrent) {
          setGlyphState({ failed: false, Icon: loadedIcon })
        }
      })
      .catch(() => {
        if (isCurrent) {
          setGlyphState({ failed: true, Icon: null })
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
        className={failed ? 'icon-placeholder is-error' : 'icon-placeholder'}
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
})
