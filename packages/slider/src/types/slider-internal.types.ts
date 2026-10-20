import type { ReactNode } from "react";
import type { LayoutChangeEvent, ViewStyle } from "react-native";
import type { Gesture } from "react-native-gesture-handler";
import type { AnimatedStyle, SharedValue } from "react-native-reanimated";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

import type {
  SliderMarkDefinition,
  SliderMarkLayout,
} from "./slider-marks.types";
import type { SliderBounds } from "./slider-value.types";
import type {
  RangeSliderProps,
  SliderProps,
  SliderValue,
} from "./slider.types";

export interface SliderInteractionHandlers {
  onLayout: (event: LayoutChangeEvent) => void;
}

export interface UseSliderInteractionOptions {
  disabled: boolean;
  width: SharedValue<number>;
  onEnd: () => void;
  onLayout?: SliderProps["onLayout"];
  onMove: (position: number, width: number) => void;
  /** UI-thread worklet; returns whether the snapped value changed. */
  onPosition: (position: number, width: number, starting: boolean) => boolean;
  onStart: (position: number, width: number) => void;
}

export interface UseSliderInteractionResult {
  gesture: ReturnType<typeof Gesture.Pan>;
  handleLayout: (event: LayoutChangeEvent) => void;
}

export interface SliderTrackProps extends SliderInteractionHandlers {
  gesture: ReturnType<typeof Gesture.Pan>;
  trackContent?: ReactNode;
  activeTrackStyle: AnimatedStyle<ViewStyle>;
  children: ReactNode;
  disabled: boolean;
  marks: readonly SliderMarkLayout[];
  showValueBubble: boolean;
  size: ComponentSize;
  variant: SelectionVariant;
}

export interface SliderThumbProps {
  disabled: boolean;
  positionStyle: AnimatedStyle<ViewStyle>;
  showValueBubble: boolean;
  size: ComponentSize;
  valueLabel: string;
  variant: SelectionVariant;
}

export interface SliderLabelsProps {
  disabled: boolean;
  marks: readonly SliderMarkDefinition[];
  maxLabel: string;
  minLabel: string;
  showMarkLabels: boolean;
  showMinMax: boolean;
  variant: SelectionVariant;
}

export interface UseSliderOptions {
  onValueChangeWorklet?: SliderProps["onValueChangeWorklet"];
  defaultValue: number;
  disabled: boolean;
  formatValue?: SliderProps["formatValue"];
  marks?: SliderProps["marks"];
  max: number;
  min: number;
  onLayout?: SliderProps["onLayout"];
  onSlidingComplete?: SliderProps["onSlidingComplete"];
  onSlidingStart?: SliderProps["onSlidingStart"];
  onValueChange?: SliderProps["onValueChange"];
  step: number;
  value?: number;
}

export interface UseSliderResult {
  activeTrackStyle: AnimatedStyle<ViewStyle>;
  bounds: SliderBounds;
  gesture: ReturnType<typeof Gesture.Pan>;
  handleLayout: (event: LayoutChangeEvent) => void;
  labelMarks: readonly SliderMarkDefinition[];
  marks: readonly SliderMarkLayout[];
  positionStyle: AnimatedStyle<ViewStyle>;
  valueLabel: string;
}

export interface UseRangeSliderOptions {
  defaultValue: SliderValue;
  disabled: boolean;
  formatValue?: RangeSliderProps["formatValue"];
  marks?: RangeSliderProps["marks"];
  max: number;
  min: number;
  minStepsBetweenThumbs: number;
  onLayout?: RangeSliderProps["onLayout"];
  onSlidingComplete?: RangeSliderProps["onSlidingComplete"];
  onSlidingStart?: RangeSliderProps["onSlidingStart"];
  onValueChange?: RangeSliderProps["onValueChange"];
  step: number;
  value?: SliderValue;
}

export interface RangeSliderThumbBehavior {
  positionStyle: AnimatedStyle<ViewStyle>;
  valueLabel: string;
}

export interface UseRangeSliderResult {
  activeTrackStyle: AnimatedStyle<ViewStyle>;
  bounds: SliderBounds;
  endThumb: RangeSliderThumbBehavior;
  gesture: ReturnType<typeof Gesture.Pan>;
  handleLayout: (event: LayoutChangeEvent) => void;
  labelMarks: readonly SliderMarkDefinition[];
  marks: readonly SliderMarkLayout[];
  startThumb: RangeSliderThumbBehavior;
}
