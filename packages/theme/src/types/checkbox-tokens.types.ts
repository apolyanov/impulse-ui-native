import type { ComponentSize, ComponentVariant } from "./components.types";

export type CheckboxSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    iconSize: number;
    hitSlop: number;
  }
>;

export type CheckboxVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;
  }
>;

export interface CheckboxTokens {
  borderWidth: number;
  borderRadius: number;
  uncheckedBackgroundColor: string;
  uncheckedBorderColor: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledColor: string;
  sizes: CheckboxSizeTokens;
  variants: CheckboxVariantTokens;
}
