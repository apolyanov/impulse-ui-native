import { ComponentSize, ComponentVariant } from "./components.types";

export interface ControlAddonTokens {
  marginHorizontal: number;
  hitSlop: number;

  iconColor: string;
  errorIconColor: string;
  disabledIconColor: string;
}

export type ControlContainerSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
  }
>;

export type ControlContainerVariantTokens = Record<
  ComponentVariant,
  {
    backgroundColor: string;
    borderColor: string;

    errorBorderColor: string;

    disabledBackgroundColor: string;
    disabledBorderColor: string;
  }
>;

export interface ControlContainerTokens {
  borderWidth: number;
  borderRadius: number;
  disabledOpacity: number;
  sizes: ControlContainerSizeTokens;
  variants: ControlContainerVariantTokens;
}

export interface ControlErrorTokens {
  marginTop: number;
  color: string;
  fontSize: number;
}

export type ControlInputSizeTokens = Record<
  ComponentSize,
  {
    fontSize: number;
  }
>;

export type ControlInputVariantTokens = Record<
  ComponentVariant,
  {
    color: string;
    placeholderColor: string;

    disabledColor: string;
    disabledPlaceholderColor: string;

    errorColor: string;
    errorPlaceholderColor: string;
  }
>;

export interface ControlInputTokens {
  flex: number;
  fontFamily: string;
  paddingHorizontal: number;
  sizes: ControlInputSizeTokens;
  variants: ControlInputVariantTokens;
}

export interface ControlLabelTokens {
  marginBottom: number;
  fontSize: number;

  color: string;
  disabledColor: string;
  errorColor: string;
}
