import { iconLoaders } from './catalog'
import type { IconComponent, IconEntry } from './types'

const componentCache = new Map<string, IconComponent>()
const loadCache = new Map<string, Promise<IconComponent>>()

export function getCachedIcon(entry: IconEntry) {
  return componentCache.get(entry.id) ?? null
}

export function loadIcon(entry: IconEntry): Promise<IconComponent> {
  const cached = componentCache.get(entry.id)

  if (cached) {
    return Promise.resolve(cached)
  }

  const pending = loadCache.get(entry.id)

  if (pending) {
    return pending
  }

  const loader = iconLoaders[entry.modulePath]

  if (!loader) {
    return Promise.reject(
      new Error(`Icon module was not found: ${entry.modulePath}`),
    )
  }

  const promise = loader()
    .then((iconModule) => {
      const Icon = iconModule[entry.componentName]

      if (!Icon) {
        throw new Error(`Icon export was not found: ${entry.componentName}`)
      }

      componentCache.set(entry.id, Icon)
      return Icon
    })
    .catch((error: unknown) => {
      loadCache.delete(entry.id)
      throw error
    })

  loadCache.set(entry.id, promise)
  return promise
}
