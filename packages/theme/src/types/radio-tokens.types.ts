import type {
  ComponentSize,
  SelectionVariant,
  SelectionVisualState,
} from "./components.types";

export type RadioSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    indicatorSize: number;
    hitSlop: number;
  }
>;

export interface RadioAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type RadioVariantTokens = Record<
  SelectionVariant,
  Record<SelectionVisualState, RadioAppearanceTokens>
>;

export interface RadioTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: RadioSizeTokens;
  variants: RadioVariantTokens;
}
