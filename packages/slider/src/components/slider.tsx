import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { SliderProps } from "../types";
import {
  DefaultMax,
  DefaultMin,
  DefaultStep,
  DefaultValue,
} from "../constants";
import { useSlider } from "../hooks";
import { formatSliderValue } from "../utils";
import { SliderLabels } from "./slider-labels";
import { SliderThumbControl } from "./slider-thumb";
import { SliderTrack } from "./slider-track";

export const Slider = memo(function Slider({
  accessibilityLabel,
  accessibilityState,
  accessibilityValue,
  defaultValue = DefaultValue,
  disabled = false,
  formatValue,
  marks,
  max = DefaultMax,
  min = DefaultMin,
  onBlur,
  onFocus,
  onKeyDown,
  onLayout,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
  showMarkLabels = false,
  showMinMax = false,
  showValueBubble = false,
  size = "medium",
  step = DefaultStep,
  style,
  value,
  variant = "filled",
  ...props
}: SliderProps) {
  const slider = useSlider({
    accessibilityState,
    accessibilityValue,
    defaultValue,
    disabled,
    formatValue,
    marks,
    max,
    min,
    onKeyDown,
    onLayout,
    onSlidingComplete,
    onSlidingStart,
    onValueChange,
    step,
    value,
  });

  return (
    <View {...props} style={style}>
      <SliderTrack
        {...slider.interactionHandlers}
        activeTrackStyle={slider.activeTrackStyle}
        disabled={disabled}
        marks={slider.marks}
        showValueBubble={showValueBubble}
        size={size}
        trackRef={slider.trackRef}
        variant={variant}
      >
        <SliderThumbControl
          accessibilityLabel={accessibilityLabel}
          accessibilityState={slider.accessibilityState}
          accessibilityValue={slider.accessibilityValue}
          disabled={disabled}
          onBlur={onBlur}
          onDecrement={slider.onDecrement}
          onFocus={onFocus}
          onIncrement={slider.onIncrement}
          onKeyDown={slider.onKeyDown}
          positionStyle={slider.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.valueLabel}
          variant={variant}
        />
      </SliderTrack>

      <SliderLabels
        disabled={disabled}
        marks={slider.marks}
        maxLabel={formatSliderValue(slider.bounds.max, formatValue)}
        minLabel={formatSliderValue(slider.bounds.min, formatValue)}
        showMarkLabels={showMarkLabels}
        showMinMax={showMinMax}
        variant={variant}
      />
    </View>
  );
});
