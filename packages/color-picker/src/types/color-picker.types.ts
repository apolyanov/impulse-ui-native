import type { PropsWithChildren, ReactNode } from "react";

import type {
  ButtonProps,
  PressableCoreProps,
  ViewProps,
} from "@impulse-ui-native/primitives";
import type {
  ColorPickerPreset,
  ComponentSize,
} from "@impulse-ui-native/theme";

import type { ColorChannel, ColorPickerCommitMode } from "./color.types";

export interface ColorPickerRootProps extends ViewProps {
  /** Hex: RGB, RGBA, RRGGBB, or RRGGBBAA, with an optional #. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: ComponentSize;
  /** Confirm mode stages changes until Apply and discards them on Cancel. */
  commitMode?: ColorPickerCommitMode;
}

export interface ColorPickerProps extends Omit<
  ColorPickerRootProps,
  "children"
> {
  showAlpha?: boolean;
  /** Show the preset palette and its label. Defaults to true. */
  showPresets?: boolean;
  /** An empty array hides presets. Defaults to the active theme palette. */
  presets?: readonly ColorPickerPreset[];
  /** Label above the preset palette. Defaults to "Theme colors". */
  presetsLabel?: string;
}

export interface ColorPickerChannelInputProps {
  channel: ColorChannel;
  label?: string;
}

export interface ColorPickerAlphaInputProps {
  label?: string;
}

export interface ColorPickerSwatchProps extends Omit<
  PressableCoreProps,
  "loading" | "children"
> {
  children?: ReactNode;
  color: string;
}

export type ColorPickerActionProps = PropsWithChildren<ButtonProps>;
