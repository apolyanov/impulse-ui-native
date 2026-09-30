import type {
  ComponentSize,
  ControlVisualState,
  SelectionVariant,
  VisualStateTokens,
} from "./components.types";

/** @deprecated Use SelectionVariant. */
export type SliderVariant = SelectionVariant;

export type SliderSizeTokens = Record<
  ComponentSize,
  {
    trackHeight: number;
    thumbSize: number;
    markSize: number;
  }
>;

export interface SliderAppearanceTokens {
  activeMarkColor: string;
  activeTrackColor: string;
  inactiveTrackColor: string;
  labelColor: string;
  markColor: string;
  thumbBackgroundColor: string;
  thumbBorderColor: string;
  thumbBorderWidth: number;
  thumbHighlightColor: string;
  valueBubbleBackgroundColor: string;
  valueBubbleBorderColor: string;
  valueBubbleColor: string;
}

export type SliderVariantTokens = Record<
  SelectionVariant,
  VisualStateTokens<ControlVisualState, SliderAppearanceTokens>
>;

export interface SliderTokens {
  trackBorderRadius: number;
  thumbBorderRadius: number;
  valueBubbleBorderRadius: number;
  valueBubbleBorderWidth: number;
  valueBubblePaddingHorizontal: number;
  valueBubblePaddingVertical: number;
  valueBubbleGap: number;
  labelGap: number;
  sizes: SliderSizeTokens;
  variants: SliderVariantTokens;
}
