import { iconLoaders } from "./catalog";
import type { IconComponent, IconEntry, IconLoader } from "./types";

const componentCache = new Map<string, IconComponent>();
const loadCache = new Map<string, Promise<IconComponent>>();

export const getCachedIcon = (entry: IconEntry) =>
  componentCache.get(entry.id) ?? null;

const resolveIcon = async (entry: IconEntry, loader: IconLoader) => {
  try {
    const iconModule = await loader();
    const Icon = iconModule[entry.componentName];

    if (!Icon) {
      throw new Error(`Icon export was not found: ${entry.componentName}`);
    }

    componentCache.set(entry.id, Icon);
    return Icon;
  } catch (error) {
    loadCache.delete(entry.id);
    throw error;
  }
};

export const loadIcon = (entry: IconEntry): Promise<IconComponent> => {
  const cached = componentCache.get(entry.id);

  if (cached) {
    return Promise.resolve(cached);
  }

  const pending = loadCache.get(entry.id);

  if (pending) {
    return pending;
  }

  const loader = iconLoaders[entry.modulePath];

  if (!loader) {
    return Promise.reject(
      new Error(`Icon module was not found: ${entry.modulePath}`)
    );
  }

  const promise = resolveIcon(entry, loader);

  loadCache.set(entry.id, promise);
  return promise;
};
