import type { JSX } from 'react'

export type {
  IconCategory,
  IconCategoryId,
  IconVariant,
} from '../../shared/icon-taxonomy'

export type IconComponent = (props: JSX.IntrinsicElements['svg']) => JSX.Element

export type IconModule = Record<string, IconComponent>
export type IconLoader = () => Promise<IconModule>

export type IconEntry = {
  baseSlug: string
  categoryId: IconCategoryId
  componentName: string
  displayName: string
  fileName: string
  id: string
  importPath: string
  modulePath: string
  searchText: string
  variant: IconVariant
}

export type IconFamily = {
  categoryId: IconCategoryId
  displayName: string
  id: string
  searchText: string
  totalVariants: number
  variants: IconEntry[]
}

export type IconDensity = 'comfortable' | 'compact'
export type IconViewMode = 'grid' | 'list'
