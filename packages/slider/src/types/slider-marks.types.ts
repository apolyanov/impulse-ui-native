import type { ViewStyle } from "react-native";

import type { SliderBounds } from "./slider-value.types";
import type { SliderProps } from "./slider.types";

export interface SliderMarkDefinition {
  endpoint?: "start" | "end";
  label: string;
  position: ViewStyle;
  value: number;
}

export interface SliderMarkLayout extends SliderMarkDefinition {
  active: boolean;
}

export interface UseSliderMarksOptions {
  bounds: SliderBounds;
  marks?: SliderProps["marks"];
  formatValue?: SliderProps["formatValue"];
  startValue: number;
  endValue: number;
}

export interface UseSliderMarksResult {
  labelMarks: readonly SliderMarkDefinition[];
  marks: readonly SliderMarkLayout[];
}
