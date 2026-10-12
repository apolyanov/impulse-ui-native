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
  defaultValue = DefaultValue,
  disabled = false,
  formatValue,
  marks,
  max = DefaultMax,
  min = DefaultMin,
  onLayout,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
  onValueChangeWorklet,
  showMarkLabels = false,
  showMinMax = false,
  showValueBubble = false,
  size = "medium",
  step = DefaultStep,
  style,
  trackContent,
  value,
  variant = "filled",
  ...props
}: SliderProps) {
  const slider = useSlider({
    defaultValue,
    disabled,
    formatValue,
    marks,
    max,
    min,
    onLayout,
    onSlidingComplete,
    onSlidingStart,
    onValueChange,
    onValueChangeWorklet,
    step,
    value,
  });

  return (
    <View {...props} style={style}>
      <SliderTrack
        gesture={slider.gesture}
        onLayout={slider.handleLayout}
        activeTrackStyle={slider.activeTrackStyle}
        disabled={disabled}
        marks={slider.marks}
        showValueBubble={showValueBubble}
        size={size}
        trackContent={trackContent}
        variant={variant}
      >
        <SliderThumbControl
          disabled={disabled}
          positionStyle={slider.positionStyle}
          showValueBubble={showValueBubble}
          size={size}
          valueLabel={slider.valueLabel}
          variant={variant}
        />
      </SliderTrack>

      <SliderLabels
        disabled={disabled}
        marks={slider.labelMarks}
        maxLabel={formatSliderValue(slider.bounds.max, formatValue)}
        minLabel={formatSliderValue(slider.bounds.min, formatValue)}
        showMarkLabels={showMarkLabels}
        showMinMax={showMinMax}
        variant={variant}
      />
    </View>
  );
});
