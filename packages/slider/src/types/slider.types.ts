import type {
  AccessibilityValue,
  NativeSyntheticEvent,
  ViewProps,
} from "react-native";

import type { ComponentSize, SliderVariant } from "@impulse-ui-native/theme";

export type SliderValue = readonly [number, number];
export type SliderThumb = "start" | "end";

export type SliderKeyDownEvent = NativeSyntheticEvent<{
  key: string;
}>;

interface SliderCommonProps extends Omit<
  ViewProps,
  | "accessibilityActions"
  | "accessibilityRole"
  | "accessibilityValue"
  | "onAccessibilityAction"
> {
  disabled?: boolean;
  formatValue?: (value: number) => string;
  marks?: readonly number[];
  max?: number;
  min?: number;
  onKeyDown?: (event: SliderKeyDownEvent) => void;
  showMarkLabels?: boolean;
  showMinMax?: boolean;
  showValueBubble?: boolean;
  size?: ComponentSize;
  step?: number;
  variant?: SliderVariant;
}

export interface SliderProps extends SliderCommonProps {
  accessibilityValue?: AccessibilityValue;
  defaultValue?: number;
  onSlidingComplete?: (value: number) => void;
  onSlidingStart?: (value: number) => void;
  onValueChange?: (value: number) => void;
  value?: number;
}

export interface RangeSliderProps extends Omit<
  SliderCommonProps,
  "accessibilityLabel" | "onKeyDown"
> {
  accessibilityLabels?: readonly [string, string];
  accessibilityValues?: readonly [AccessibilityValue?, AccessibilityValue?];
  defaultValue?: SliderValue;
  minStepsBetweenThumbs?: number;
  onKeyDown?: (thumb: SliderThumb, event: SliderKeyDownEvent) => void;
  onSlidingComplete?: (value: SliderValue) => void;
  onSlidingStart?: (value: SliderValue) => void;
  onValueChange?: (value: SliderValue) => void;
  value?: SliderValue;
}
