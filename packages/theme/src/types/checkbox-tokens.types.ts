import type {
  ComponentSize,
  SelectionVariant,
  SelectionVisualState,
} from "./components.types";

export type CheckboxSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    iconSize: number;
    hitSlop: number;
  }
>;

export interface CheckboxAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type CheckboxVariantTokens = Record<
  SelectionVariant,
  Record<SelectionVisualState, CheckboxAppearanceTokens>
>;

export interface CheckboxTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: CheckboxSizeTokens;
  variants: CheckboxVariantTokens;
}
