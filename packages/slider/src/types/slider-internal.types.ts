import type { ReactNode, RefObject } from "react";
import type {
  AccessibilityState,
  AccessibilityValue,
  GestureResponderEvent,
  LayoutChangeEvent,
  PressableProps,
  View,
  ViewStyle,
} from "react-native";

import type { ComponentSize, SliderVariant } from "@impulse-ui-native/theme";

import type { SliderBounds } from "../utils";
import type {
  RangeSliderProps,
  SliderKeyDownEvent,
  SliderProps,
  SliderThumb,
  SliderValue,
} from "./slider.types";

export interface SliderMarkLayout {
  active: boolean;
  endpoint?: "start" | "end";
  label: string;
  position: ViewStyle;
  value: number;
}

export interface SliderInteractionHandlers {
  onLayout: (event: LayoutChangeEvent) => void;
  onMoveShouldSetResponder: () => boolean;
  onMoveShouldSetResponderCapture: () => boolean;
  onResponderGrant: (event: GestureResponderEvent) => void;
  onResponderMove: (event: GestureResponderEvent) => void;
  onResponderRelease: () => void;
  onResponderTerminate: () => void;
  onResponderTerminationRequest: () => boolean;
  onStartShouldSetResponder: () => boolean;
  onStartShouldSetResponderCapture: () => boolean;
}

export interface SliderTrackProps extends SliderInteractionHandlers {
  activeTrackStyle: ViewStyle;
  children: ReactNode;
  disabled: boolean;
  marks: readonly SliderMarkLayout[];
  showValueBubble: boolean;
  size: ComponentSize;
  trackRef: RefObject<View | null>;
  variant: SliderVariant;
}

export interface SliderThumbProps {
  accessibilityLabel?: string;
  accessibilityState: AccessibilityState;
  accessibilityValue: AccessibilityValue;
  disabled: boolean;
  onBlur?: PressableProps["onBlur"];
  onDecrement: () => void;
  onFocus?: PressableProps["onFocus"];
  onIncrement: () => void;
  onKeyDown: (event: SliderKeyDownEvent) => void;
  positionStyle: ViewStyle;
  showValueBubble: boolean;
  size: ComponentSize;
  valueLabel: string;
  variant: SliderVariant;
}

export interface SliderLabelsProps {
  disabled: boolean;
  marks: readonly SliderMarkLayout[];
  maxLabel: string;
  minLabel: string;
  showMarkLabels: boolean;
  showMinMax: boolean;
  variant: SliderVariant;
}

export interface UseSliderOptions {
  accessibilityState?: SliderProps["accessibilityState"];
  accessibilityValue?: SliderProps["accessibilityValue"];
  defaultValue: number;
  disabled: boolean;
  formatValue?: SliderProps["formatValue"];
  marks?: SliderProps["marks"];
  max: number;
  min: number;
  onKeyDown?: SliderProps["onKeyDown"];
  onLayout?: SliderProps["onLayout"];
  onSlidingComplete?: SliderProps["onSlidingComplete"];
  onSlidingStart?: SliderProps["onSlidingStart"];
  onValueChange?: SliderProps["onValueChange"];
  step: number;
  value?: number;
}

export interface UseSliderResult {
  accessibilityState: AccessibilityState;
  accessibilityValue: AccessibilityValue;
  activeTrackStyle: ViewStyle;
  bounds: SliderBounds;
  interactionHandlers: SliderInteractionHandlers;
  marks: readonly SliderMarkLayout[];
  onDecrement: () => void;
  onIncrement: () => void;
  onKeyDown: (event: SliderKeyDownEvent) => void;
  positionStyle: ViewStyle;
  trackRef: RefObject<View | null>;
  valueLabel: string;
}

export interface UseRangeSliderOptions {
  accessibilityState?: RangeSliderProps["accessibilityState"];
  accessibilityValues?: RangeSliderProps["accessibilityValues"];
  defaultValue: SliderValue;
  disabled: boolean;
  formatValue?: RangeSliderProps["formatValue"];
  marks?: RangeSliderProps["marks"];
  max: number;
  min: number;
  minStepsBetweenThumbs: number;
  onKeyDown?: RangeSliderProps["onKeyDown"];
  onLayout?: RangeSliderProps["onLayout"];
  onSlidingComplete?: RangeSliderProps["onSlidingComplete"];
  onSlidingStart?: RangeSliderProps["onSlidingStart"];
  onValueChange?: RangeSliderProps["onValueChange"];
  step: number;
  value?: SliderValue;
}

export interface RangeSliderThumbBehavior {
  accessibilityValue: AccessibilityValue;
  onDecrement: () => void;
  onIncrement: () => void;
  onKeyDown: (event: SliderKeyDownEvent) => void;
  positionStyle: ViewStyle;
  thumb: SliderThumb;
  valueLabel: string;
}

export interface UseRangeSliderResult {
  accessibilityState: AccessibilityState;
  activeTrackStyle: ViewStyle;
  bounds: SliderBounds;
  endThumb: RangeSliderThumbBehavior;
  interactionHandlers: SliderInteractionHandlers;
  marks: readonly SliderMarkLayout[];
  startThumb: RangeSliderThumbBehavior;
  trackRef: RefObject<View | null>;
}
