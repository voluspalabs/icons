import { useCallback, useLayoutEffect, useState } from 'react'

export function useMeasuredElement<T extends HTMLElement>() {
  const [element, setElement] = useState<T | null>(null)
  const [size, setSize] = useState({ height: 0, width: 0 })
  const ref = useCallback((nextElement: T | null) => {
    setElement(nextElement)
  }, [])

  useLayoutEffect(() => {
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
  }, [element])

  return [ref, size] as const
}
