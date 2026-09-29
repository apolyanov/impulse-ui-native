import type { ComponentSize, SelectionVariant } from "./components.types";

/** @deprecated Use SelectionVariant. */
export type SliderVariant = SelectionVariant;

export type SliderSizeTokens = Record<
  ComponentSize,
  {
    trackHeight: number;
    thumbSize: number;
    markSize: number;
    hitSlop: number;
  }
>;

export type SliderVariantTokens = Record<
  SelectionVariant,
  {
    activeTrackColor: string;
    labelColor: string;
    thumbBackgroundColor: string;
    thumbBorderColor: string;
    thumbHighlightColor: string;
    valueBubbleBackgroundColor: string;
    valueBubbleBorderColor: string;
    valueBubbleColor: string;
  }
>;

export interface SliderTokens {
  trackBorderRadius: number;
  thumbBorderRadius: number;
  thumbBorderWidth: number;
  outlinedThumbBorderWidth: number;
  focusRingWidth: number;
  focusRingOffset: number;
  inactiveTrackColor: string;
  markColor: string;
  activeMarkColor: string;
  disabledTrackColor: string;
  disabledThumbColor: string;
  disabledTextColor: string;
  focusRingColor: string;
  valueBubbleBorderRadius: number;
  valueBubbleBorderWidth: number;
  valueBubblePaddingHorizontal: number;
  valueBubblePaddingVertical: number;
  valueBubbleGap: number;
  labelGap: number;
  sizes: SliderSizeTokens;
  variants: SliderVariantTokens;
}
