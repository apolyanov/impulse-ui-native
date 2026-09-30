import type { ReactNode, RefObject } from "react";
import type {
  GestureResponderEvent,
  LayoutChangeEvent,
  View,
  ViewStyle,
} from "react-native";

import type { ComponentSize, SelectionVariant } from "@impulse-ui-native/theme";

import type { SliderBounds } from "../utils";
import type {
  RangeSliderProps,
  SliderProps,
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

export interface UseSliderInteractionOptions {
  disabled: boolean;
  onEnd: () => void;
  onLayout?: SliderProps["onLayout"];
  onMove: (position: number, width: number) => void;
  onStart: (position: number, width: number) => void;
}

export interface UseSliderInteractionResult {
  interactionHandlers: SliderInteractionHandlers;
  trackRef: RefObject<View | null>;
}

export interface SliderTrackProps extends SliderInteractionHandlers {
  activeTrackStyle: ViewStyle;
  children: ReactNode;
  disabled: boolean;
  marks: readonly SliderMarkLayout[];
  showValueBubble: boolean;
  size: ComponentSize;
  trackRef: RefObject<View | null>;
  variant: SelectionVariant;
}

export interface SliderThumbProps {
  disabled: boolean;
  positionStyle: ViewStyle;
  showValueBubble: boolean;
  size: ComponentSize;
  valueLabel: string;
  variant: SelectionVariant;
}

export interface SliderLabelsProps {
  disabled: boolean;
  marks: readonly SliderMarkLayout[];
  maxLabel: string;
  minLabel: string;
  showMarkLabels: boolean;
  showMinMax: boolean;
  variant: SelectionVariant;
}

export interface UseSliderOptions {
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
  activeTrackStyle: ViewStyle;
  bounds: SliderBounds;
  interactionHandlers: SliderInteractionHandlers;
  marks: readonly SliderMarkLayout[];
  positionStyle: ViewStyle;
  trackRef: RefObject<View | null>;
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
  positionStyle: ViewStyle;
  valueLabel: string;
}

export interface UseRangeSliderResult {
  activeTrackStyle: ViewStyle;
  bounds: SliderBounds;
  endThumb: RangeSliderThumbBehavior;
  interactionHandlers: SliderInteractionHandlers;
  marks: readonly SliderMarkLayout[];
  startThumb: RangeSliderThumbBehavior;
  trackRef: RefObject<View | null>;
}
