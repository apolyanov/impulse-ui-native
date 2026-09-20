import type { ComponentSize, ComponentVariant } from "./components.types";

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

export type SwitchVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;
  }
>;

export interface SwitchTokens {
  animationDuration: number;
  borderWidth: number;
  borderRadius: number;
  thumbBorderRadius: number;
  uncheckedBackgroundColor: string;
  uncheckedBorderColor: string;
  uncheckedThumbColor: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledThumbColor: string;
  loadingIndicatorColor: string;
  sizes: SwitchSizeTokens;
  variants: SwitchVariantTokens;
}
