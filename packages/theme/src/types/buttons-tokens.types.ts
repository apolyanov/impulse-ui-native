import {
  ActionVariant,
  ActionVisualState,
  ComponentSize,
} from "./components.types";

export type ButtonSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingVertical: number;
    paddingHorizontal: number;
    fontSize: number;
  }
>;

export type IconButtonSizeTokens = Record<
  ComponentSize,
  {
    size: number;
    padding: number;
  }
>;

export interface ButtonAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type ButtonVariantTokens = Record<
  ActionVariant,
  Record<ActionVisualState, ButtonAppearanceTokens>
>;

export type IconButtonVariantTokens = Record<
  ActionVariant,
  Record<ActionVisualState, ButtonAppearanceTokens>
>;

export interface ButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: ButtonSizeTokens;
  variants: ButtonVariantTokens;
}

export interface IconButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: IconButtonSizeTokens;
  variants: IconButtonVariantTokens;
}
