// Framework-free icon taxonomy.
//
// Single source of truth shared by the catalog site (site/src/*) and the LLM
// manifest generator (scripts/generate-llm-manifest.ts). Must stay free of any
// React/Vite/DOM imports so it can run under plain Bun/Node as well as the bundler.

export type IconVariant =
  | 'contrast'
  | 'duo-solid'
  | 'duo-stroke'
  | 'other'
  | 'solid'
  | 'stroke'

export type IconCategoryId =
  | 'ai'
  | 'brands'
  | 'communication'
  | 'commerce'
  | 'data'
  | 'development'
  | 'devices'
  | 'editing'
  | 'files'
  | 'health'
  | 'media'
  | 'navigation'
  | 'security'
  | 'transport'
  | 'ui'
  | 'users'
  | 'weather'

export type IconCategory = {
  description: string
  id: IconCategoryId
  label: string
}

const PI_PREFIX_PATTERN = /^pi-/
const WHITESPACE_PATTERN = /\s+/g

export const VARIANT_ORDER: IconVariant[] = [
  'stroke',
  'duo-stroke',
  'solid',
  'duo-solid',
  'contrast',
  'other',
]

export const VARIANT_MATCH_ORDER: IconVariant[] = [
  'duo-stroke',
  'duo-solid',
  'contrast',
  'stroke',
  'solid',
]

export const VARIANT_LABELS: Record<IconVariant, string> = {
  contrast: 'Contrast',
  'duo-solid': 'Duo solid',
  'duo-stroke': 'Duo stroke',
  other: 'Other',
  solid: 'Solid',
  stroke: 'Stroke',
}

export const WORD_LABELS: Record<string, string> = {
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

export const ICON_CATEGORIES: IconCategory[] = [
  {
    description: 'Menus, arrows, sidebars, cursors, and movement controls',
    id: 'navigation',
    label: 'Navigation & menus',
  },
  {
    description: 'AI, automation, prompts, generation, and intelligent tools',
    id: 'ai',
    label: 'AI & automation',
  },
  {
    description: 'Files, folders, formats, clipboard, documents, and exports',
    id: 'files',
    label: 'Files & documents',
  },
  {
    description: 'Mail, chat, calls, notifications, and collaboration',
    id: 'communication',
    label: 'Communication',
  },
  {
    description: 'Wallets, cards, currencies, crypto, invoices, and commerce',
    id: 'commerce',
    label: 'Commerce & finance',
  },
  {
    description: 'Photos, video, audio, captions, podcasts, and playback',
    id: 'media',
    label: 'Media',
  },
  {
    description:
      'Code, terminals, branches, packages, APIs, and developer tools',
    id: 'development',
    label: 'Development',
  },
  {
    description: 'Charts, dashboards, analytics, tables, and metrics',
    id: 'data',
    label: 'Data & charts',
  },
  {
    description: 'Locks, shields, privacy, warnings, and access control',
    id: 'security',
    label: 'Security',
  },
  {
    description: 'Text formatting, pencils, annotations, and content editing',
    id: 'editing',
    label: 'Editing & text',
  },
  {
    description: 'Users, people, reactions, social accounts, and communities',
    id: 'users',
    label: 'Users & social',
  },
  {
    description: 'Phones, batteries, keyboards, servers, screens, and hardware',
    id: 'devices',
    label: 'Devices & hardware',
  },
  {
    description: 'Medical, wellness, prescriptions, support, and first aid',
    id: 'health',
    label: 'Health',
  },
  {
    description: 'Cars, maps, travel, fuel, rockets, and spatial icons',
    id: 'transport',
    label: 'Transport & travel',
  },
  {
    description: 'Clouds, weather, plants, nature, and environment',
    id: 'weather',
    label: 'Weather & nature',
  },
  {
    description: 'Product marks, logos, networks, and branded services',
    id: 'brands',
    label: 'Brands',
  },
  {
    description: 'General interface controls, states, shapes, and utilities',
    id: 'ui',
    label: 'General UI',
  },
]

export const CATEGORY_LABELS = Object.fromEntries(
  ICON_CATEGORIES.map((category) => [category.id, category.label]),
) as Record<IconCategoryId, string>

export const CATEGORY_KEYWORDS: Record<IconCategoryId, string[]> = {
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

export function getVariant(slug: string): IconVariant {
  for (const variant of VARIANT_MATCH_ORDER) {
    if (slug.endsWith(`-${variant}`)) {
      return variant
    }
  }

  return 'other'
}

export function removeVariant(slug: string, variant: IconVariant) {
  return variant === 'other' ? slug : slug.replace(`-${variant}`, '')
}

export function toComponentName(fileName: string) {
  return fileName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export function toDisplayName(slug: string) {
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

export function getCategoryId(baseSlug: string): IconCategoryId {
  const slug = baseSlug.replace(PI_PREFIX_PATTERN, '')

  for (const category of ICON_CATEGORIES) {
    const keywords = CATEGORY_KEYWORDS[category.id]

    if (keywords.some((keyword) => slug.includes(keyword))) {
      return category.id
    }
  }

  return 'ui'
}
