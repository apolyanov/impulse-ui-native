import type { ViewProps } from "react-native";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

export type SliderValue = readonly [number, number];

export type SliderThumb = "start" | "end";

interface SliderCommonProps extends ViewProps {
  disabled?: boolean;
  formatValue?: (value: number) => string;
  marks?: readonly number[];
  max?: number;
  min?: number;
  showMarkLabels?: boolean;
  showMinMax?: boolean;
  showValueBubble?: boolean;
  size?: ComponentSize;
  step?: number;
  variant?: SelectionVariant;
}

export interface SliderProps extends SliderCommonProps {
  defaultValue?: number;
  onSlidingComplete?: (value: number) => void;
  onSlidingStart?: (value: number) => void;
  onValueChange?: (value: number) => void;
  value?: number;
}

export interface RangeSliderProps extends SliderCommonProps {
  defaultValue?: SliderValue;
  minStepsBetweenThumbs?: number;
  onSlidingComplete?: (value: SliderValue) => void;
  onSlidingStart?: (value: SliderValue) => void;
  onValueChange?: (value: SliderValue) => void;
  value?: SliderValue;
}
