import type {
  ActionVariant,
  ActionVisualState,
  ButtonTone,
  ComponentSize,
  VisualStateTokens,
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

export interface ActionAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  color: string;
}

export type ButtonVariantTokens = Record<
  ActionVariant,
  VisualStateTokens<ActionVisualState, ActionAppearanceTokens>
>;

export type IconButtonVariantTokens = Record<
  ActionVariant,
  VisualStateTokens<ActionVisualState, ActionAppearanceTokens>
>;

export interface ButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: ButtonSizeTokens;
  colors: Record<ButtonTone, ButtonVariantTokens>;
}

export interface IconButtonTokens {
  borderWidth: number;
  borderRadius: number;
  sizes: IconButtonSizeTokens;
  colors: Record<ButtonTone, IconButtonVariantTokens>;
}
