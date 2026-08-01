import type { JSX } from "react";

// The `export ... from` below only forwards these names to consumers; it does
// not bind them in this module. The import is what lets the declarations below
// reference them — without it they resolve to `any`.
import type { IconCategoryId, IconVariant } from "../../shared/icon-taxonomy";

export type {
  IconCategory,
  IconCategoryId,
  IconVariant,
} from "../../shared/icon-taxonomy";

export type IconComponent = (
  props: JSX.IntrinsicElements["svg"]
) => JSX.Element;

export type IconModule = Record<string, IconComponent>;
export type IconLoader = () => Promise<IconModule>;

export interface IconEntry {
  baseSlug: string;
  categoryId: IconCategoryId;
  componentName: string;
  displayName: string;
  fileName: string;
  id: string;
  importPath: string;
  modulePath: string;
  searchText: string;
  variant: IconVariant;
}

export interface IconFamily {
  categoryId: IconCategoryId;
  displayName: string;
  id: string;
  searchText: string;
  totalVariants: number;
  variants: IconEntry[];
}

export type IconDensity = "comfortable" | "compact";
export type IconViewMode = "grid" | "list";
