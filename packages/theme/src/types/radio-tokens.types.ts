import type { ComponentSize, ComponentVariant } from "./components.types";

export type RadioSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    indicatorSize: number;
    hitSlop: number;
  }
>;

export type RadioVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;
  }
>;

export interface RadioTokens {
  borderWidth: number;
  borderRadius: number;
  uncheckedBackgroundColor: string;
  uncheckedBorderColor: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledColor: string;
  sizes: RadioSizeTokens;
  variants: RadioVariantTokens;
}
