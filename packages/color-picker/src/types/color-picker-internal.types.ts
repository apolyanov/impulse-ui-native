import type { DerivedValue, SharedValue } from "react-native-reanimated";

import type {
  ColorPickerPreset,
  ComponentSize,
} from "@impulse-ui-native/theme";

import type {
  ColorChannel,
  ColorPickerCommitMode,
  HsvaColor,
  RgbaColor,
} from "./color.types";

export interface ColorPickerPresetEntryProps {
  preset: ColorPickerPreset;
}

export interface ColorPickerContextData {
  gesture: ColorPickerGestureHandlers;
  motion: ColorPickerMotion;
  resetKey: number;
  value: string;
  rgba: RgbaColor;
  hsva: HsvaColor;
  disabled: boolean;
  size: ComponentSize;
  commitMode: ColorPickerCommitMode;
  setColor: (color: string) => boolean;
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
  setChannel: (channel: ColorChannel, value: number) => void;
  apply: () => void;
  cancel: () => void;
}

export interface ColorPickerGestureHandlers {
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
}

export interface ColorPickerMotion {
  color: SharedValue<HsvaColor>;
  rgba: DerivedValue<RgbaColor>;
  hue: DerivedValue<number>;
  setHue: (hue: number) => void;
  setAlpha: (alpha: number) => void;
  setSpectrum: (saturation: number, brightness: number) => void;
  finish: () => void;
}

export interface ColorPickerDraft {
  commitMode: ColorPickerCommitMode;
  base: string;
  hsva: HsvaColor;
}

export interface ColorPickerSizeThemeProps {
  size: ComponentSize;
  disabled?: boolean;
}

export interface ColorPickerSwatchThemeProps extends ColorPickerSizeThemeProps {
  selected: boolean;
}
