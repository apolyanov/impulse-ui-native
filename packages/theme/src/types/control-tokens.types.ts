import type {
  ComponentSize,
  FieldVariant,
  FieldVisualState,
  VisualStateTokens,
} from "./components.types";

export interface ControlAddonAppearanceTokens {
  iconColor: string;
}

export type ControlAddonVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlAddonAppearanceTokens>
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

export interface ControlContainerAppearanceTokens {
  backgroundColor: string;
  borderColor: string;
  opacity: number;
}

export type ControlContainerVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlContainerAppearanceTokens>
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

export interface ControlInputAppearanceTokens {
  color: string;
  placeholderColor: string;
}

export type ControlInputVariantTokens = Record<
  FieldVariant,
  VisualStateTokens<FieldVisualState, ControlInputAppearanceTokens>
>;

export interface ControlInputTokens {
  flex: number;
  fontFamily: string;
  paddingHorizontal: number;
  sizes: ControlInputSizeTokens;
  variants: ControlInputVariantTokens;
}

export interface ControlLabelAppearanceTokens {
  color: string;
}

export interface ControlLabelTokens {
  marginBottom: number;
  fontSize: number;
  states: VisualStateTokens<FieldVisualState, ControlLabelAppearanceTokens>;
}
