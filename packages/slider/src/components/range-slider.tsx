import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { RangeSliderProps } from "../types";
import {
  DefaultMax,
  DefaultMin,
  DefaultRangeValue,
  DefaultStep,
} from "../constants";
import { useRangeSlider } from "../hooks";
import { formatSliderValue } from "../utils";
import { SliderLabels } from "./slider-labels";
import { SliderThumbControl } from "./slider-thumb";
import { SliderTrack } from "./slider-track";

export const RangeSlider = memo(function RangeSlider({
  accessibilityLabels = ["Minimum value", "Maximum value"],
  accessibilityState,
  accessibilityValues,
  defaultValue = DefaultRangeValue,
  disabled = false,
  formatValue,
  marks,
  max = DefaultMax,
  min = DefaultMin,
  minStepsBetweenThumbs = 0,
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
}: RangeSliderProps) {
  const slider = useRangeSlider({
    accessibilityState,
    accessibilityValues,
    defaultValue,
    disabled,
    formatValue,
    marks,
    max,
    min,
    minStepsBetweenThumbs,
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
          accessibilityLabel={accessibilityLabels[0]}
          accessibilityState={slider.accessibilityState}
          accessibilityValue={slider.startThumb.accessibilityValue}
          disabled={disabled}
          onBlur={onBlur}
          onDecrement={slider.startThumb.onDecrement}
          onFocus={onFocus}
          onIncrement={slider.startThumb.onIncrement}
          onKeyDown={slider.startThumb.onKeyDown}
          positionStyle={slider.startThumb.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.startThumb.valueLabel}
          variant={variant}
        />
        <SliderThumbControl
          accessibilityLabel={accessibilityLabels[1]}
          accessibilityState={slider.accessibilityState}
          accessibilityValue={slider.endThumb.accessibilityValue}
          disabled={disabled}
          onBlur={onBlur}
          onDecrement={slider.endThumb.onDecrement}
          onFocus={onFocus}
          onIncrement={slider.endThumb.onIncrement}
          onKeyDown={slider.endThumb.onKeyDown}
          positionStyle={slider.endThumb.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.endThumb.valueLabel}
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
