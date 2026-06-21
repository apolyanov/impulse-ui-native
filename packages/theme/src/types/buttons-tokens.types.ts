import { ComponentSize, ComponentVariant } from "./components.types";

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

export type ButtonVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;

    disabledBackgroundColor: string;
    disabledBorderColor: string;
    disabledColor: string;
  }
>;

export type IconButtonVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;
    color: string;

    disabledBackgroundColor: string;
    disabledBorderColor: string;
    disabledColor: string;
  }
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
