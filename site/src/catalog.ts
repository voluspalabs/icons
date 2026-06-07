import {
  CATEGORY_LABELS,
  ICON_CATEGORIES,
  VARIANT_LABELS,
  VARIANT_MATCH_ORDER,
  VARIANT_ORDER,
  WORD_LABELS,
} from './constants'
import type {
  IconCategoryId,
  IconEntry,
  IconFamily,
  IconLoader,
  IconVariant,
} from './types'

const PI_PREFIX_PATTERN = /^pi-/
const TSX_EXTENSION_PATTERN = /\.tsx$/
const WHITESPACE_PATTERN = /\s+/g

export const iconLoaders = import.meta.glob('../../src/pi-*.tsx') as Record<
  string,
  IconLoader
>

const CATEGORY_KEYWORDS: Record<IconCategoryId, string[]> = {
  ai: [
    'ai',
    'automation',
    'bot',
    'brain',
    'chatgpt',
    'generate',
    'magic',
    'prompt',
    'robot',
    'spark',
  ],
  brands: [
    'airbnb',
    'apple',
    'discord',
    'figma',
    'github',
    'google',
    'instagram',
    'linkedin',
    'mastodon',
    'npm',
    'patreon',
    'peerlist',
    'rive',
    'sketch',
    'slack',
    'telegram',
    'twitter',
    'x-com',
    'youtube',
  ],
  communication: [
    'bell',
    'chat',
    'comment',
    'envelope',
    'inbox',
    'mail',
    'message',
    'mic',
    'notification',
    'phone',
    'send',
  ],
  commerce: [
    'bank',
    'card',
    'cash',
    'coin',
    'crypto',
    'currency',
    'eurc',
    'invoice',
    'money',
    'nft',
    'piggy',
    'receipt',
    'ticket',
    'token',
    'usd',
    'usdt',
    'wallet',
  ],
  data: [
    'analytics',
    'barchart',
    'chart',
    'dashboard',
    'graph',
    'median',
    'report',
    'table',
    'trendline',
  ],
  development: [
    'api',
    'branch',
    'bug',
    'code',
    'command',
    'console',
    'css',
    'git',
    'html',
    'markdown',
    'package',
    'pull-request',
    'sdk',
    'server',
    'terminal',
    'tsx',
  ],
  devices: [
    'airplay',
    'battery',
    'cast',
    'computer',
    'keyboard',
    'monitor',
    'mouse',
    'phone',
    'screen',
    'server',
    'speaker',
  ],
  editing: [
    'annotation',
    'cursor',
    'edit',
    'eraser',
    'heading',
    'list',
    'pencil',
    'text',
    'type',
  ],
  files: [
    'archive',
    'clipboard',
    'copy',
    'document',
    'download',
    'export',
    'file',
    'folder',
    'format',
    'jpg',
    'pdf',
    'upload',
  ],
  health: [
    'aid',
    'capsule',
    'doctor',
    'heart',
    'medicine',
    'pill',
    'prescription',
    'rx',
    'support',
  ],
  media: [
    'animation',
    'audio',
    'caption',
    'camera',
    'image',
    'mic',
    'photo',
    'play',
    'podcast',
    'speaker',
    'video',
  ],
  navigation: [
    'arrow',
    'burger',
    'chevron',
    'cursor',
    'dock',
    'dots',
    'menu',
    'navigation',
    'sidebar',
    'slant',
    'swap',
  ],
  security: [
    'blocker',
    'cancel',
    'critical',
    'danger',
    'exclamation',
    'key',
    'lock',
    'privacy',
    'shield',
    'skull',
    'warning',
  ],
  transport: [
    'car',
    'fuel',
    'map',
    'pin',
    'rocket',
    'spatial',
    'steering',
    'travel',
    'ufo',
  ],
  ui: [
    'check',
    'circle',
    'component',
    'cross',
    'default',
    'dice',
    'divide',
    'grid',
    'layer',
    'plus',
    'priority',
    'settings',
    'square',
    'stop',
    'tag',
  ],
  users: ['contact', 'face', 'reaction', 'social', 'thumb', 'user', 'wink'],
  weather: [
    'ac',
    'cloud',
    'environment',
    'leaf',
    'lightning',
    'moon',
    'snow',
    'thunder',
  ],
}

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

export function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(WHITESPACE_PATTERN, ' ')
}

export function matchesSearch(searchText: string, query: string) {
  if (!query) {
    return true
  }

  return query.split(' ').every((term) => searchText.includes(term))
}

function getCategoryId(baseSlug: string): IconCategoryId {
  const slug = baseSlug.replace(PI_PREFIX_PATTERN, '')

  for (const category of ICON_CATEGORIES) {
    const keywords = CATEGORY_KEYWORDS[category.id]

    if (keywords.some((keyword) => slug.includes(keyword))) {
      return category.id
    }
  }

  return 'ui'
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
      const categoryId = getCategoryId(baseSlug)
      const componentName = toComponentName(fileName)
      const displayName = toDisplayName(baseSlug)
      const importPath = `@voluspalabs/icons/${fileName}`
      const searchText = normalizeSearch(
        [
          fileName,
          componentName,
          displayName,
          baseSlug,
          categoryId,
          CATEGORY_LABELS[categoryId],
          variant,
          VARIANT_LABELS[variant],
        ].join(' '),
      )

      return {
        baseSlug,
        categoryId,
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
      categoryId: entry.categoryId,
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
    .sort(
      (left, right) =>
        ICON_CATEGORIES.findIndex(
          (category) => category.id === left.categoryId,
        ) -
          ICON_CATEGORIES.findIndex(
            (category) => category.id === right.categoryId,
          ) || left.displayName.localeCompare(right.displayName),
    )
}

export const CATALOG = buildCatalog()
export const TOTAL_ICONS = CATALOG.reduce(
  (total, family) => total + family.totalVariants,
  0,
)
