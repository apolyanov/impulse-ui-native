import {
  ComponentSize,
  DisplayVariant,
  DisplayVisualState,
} from "./components.types";

export type TagColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export type TagSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
    minWidth: number;
    fontSize: number;
  }
>;

export interface TagAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type TagVariantTokens = Record<
  DisplayVariant,
  Record<DisplayVisualState, TagAppearanceTokens>
>;

export type TagColorTokens = Record<TagColor, TagVariantTokens>;

export interface TagTokens {
  borderWidth: number;
  borderRadius: number;
  gap: number;
  closeHitSlop: number;
  iconMarginLeft: number;
  sizes: TagSizeTokens;
  colors: TagColorTokens;
}
