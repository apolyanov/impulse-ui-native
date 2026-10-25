import type {
  AvailabilityVisualState,
  ComponentSize,
  ComponentTone,
  DisplayVariant,
  FeedbackTone,
  VisualStateTokens,
} from "./components.types";

export type TagTone = ComponentTone | FeedbackTone;

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
