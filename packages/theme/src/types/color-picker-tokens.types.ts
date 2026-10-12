import type { ComponentSize } from "./components.types";

export interface ColorPickerPreset {
  label: string;
  color: string;
  disabled?: boolean;
}

export interface ColorPickerTokens {
  gap: number;
  rowGap: number;
  sliderLabelGap: number;
  presetsLabelGap: number;
  presetsGap: number;
  presetLabelGap: number;
  alphaFieldFlex: number;
  padding: number;
  borderRadius: number;
  spectrumBorderRadius: number;
  previewBorderRadius: number;
  swatchBorderRadius: number;
  swatchRingPadding: number;
  swatchRingBorderWidth: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  labelColor: string;
  selectedBorderColor: string;
  indicatorColor: string;
  indicatorBorderRadius: number;
  indicatorBorderWidth: number;
  indicatorShadowOffsetX: number;
  indicatorShadowOffsetY: number;
  indicatorShadowBlurRadius: number;
  indicatorShadowColor: string;
  checkerLightColor: string;
  checkerDarkColor: string;
  checkerSize: number;
  disabledOpacity: number;
  presets: readonly ColorPickerPreset[];
  sizes: Record<
    ComponentSize,
    {
      spectrumHeight: number;
      indicatorSize: number;
      previewSize: number;
      swatchSize: number;
      swatchCheckSize: number;
      swatchTargetSize: number;
    }
  >;
}
