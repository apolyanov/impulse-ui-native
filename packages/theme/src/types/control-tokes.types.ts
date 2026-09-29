import {
  ComponentSize,
  FieldVariant,
  FieldVisualState,
} from "./components.types";

export interface ControlAddonAppearanceTokens {
  iconColor: string;
}

export type ControlAddonVariantTokens = Record<
  FieldVariant,
  Record<FieldVisualState, ControlAddonAppearanceTokens>
>;

export interface ControlAddonTokens {
  marginHorizontal: number;
  hitSlop: number;
  variants: ControlAddonVariantTokens;
}

export type ControlContainerSizeTokens = Record<
  ComponentSize,
  {
    height: number;
    paddingHorizontal: number;
  }
>;

export type ControlContainerVariantTokens = Record<
  FieldVariant,
  Record<
    FieldVisualState,
    {
      backgroundColor: string;
      borderColor: string;
      opacity: number;
    }
  >
>;

export interface ControlContainerTokens {
  borderWidth: number;
  borderRadius: number;
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
  FieldVariant,
  Record<
    FieldVisualState,
    {
      color: string;
      placeholderColor: string;
    }
  >
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
  states: Record<FieldVisualState, { color: string }>;
}
