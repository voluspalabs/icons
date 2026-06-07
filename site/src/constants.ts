import type { IconCategory, IconVariant } from './types'

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
) as Record<IconCategory['id'], string>

export const DEFAULT_ICON_SIZE = 32
export const ICON_SIZE_MIN = 20
export const ICON_SIZE_MAX = 48
export const COPY_STATUS_DURATION_MS = 1800
