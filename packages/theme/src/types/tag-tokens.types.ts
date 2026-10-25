import type {
  AvailabilityVisualState,
  ComponentSize,
  DisplayVariant,
  VisualStateTokens,
} from "./components.types";

export type TagTone =
  | "neutral"
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
  VisualStateTokens<AvailabilityVisualState, TagAppearanceTokens>
>;

export type TagToneTokens = Record<TagTone, TagVariantTokens>;

export interface TagTokens {
  borderWidth: number;
  borderRadius: number;
  gap: number;
  closeHitSlop: number;
  iconMarginLeft: number;
  sizes: TagSizeTokens;
  colors: TagToneTokens;
}
