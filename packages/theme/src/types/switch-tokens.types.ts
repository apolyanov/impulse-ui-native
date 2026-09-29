import type {
  ComponentSize,
  DisplayVisualState,
  SelectionVariant,
} from "./components.types";

export type SwitchSizeTokens = Record<
  ComponentSize,
  {
    width: number;
    height: number;
    thumbSize: number;
    trackPadding: number;
    loadingIndicatorScale: number;
    hitSlop: number;
  }
>;

export interface SwitchAppearanceTokens {
  activeBackgroundColor: string;
  activeBorderColor: string;
  activeThumbColor: string;
  inactiveBackgroundColor: string;
  inactiveBorderColor: string;
  inactiveThumbColor: string;
}

export type SwitchVariantTokens = Record<
  SelectionVariant,
  Record<DisplayVisualState, SwitchAppearanceTokens>
>;

export interface SwitchTokens {
  animationDuration: number;
  borderWidth: number;
  borderRadius: number;
  thumbBorderRadius: number;
  loadingIndicatorColor: string;
  sizes: SwitchSizeTokens;
  variants: SwitchVariantTokens;
}
