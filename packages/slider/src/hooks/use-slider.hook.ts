import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type {
  UseSliderOptions,
  UseSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getContinuousValueFromPosition,
  getSliderBounds,
  getSliderPercentage,
  getValueFromPosition,
  normalizeSliderValue,
} from "../utils";
import { useSliderInteraction } from "./use-slider-interaction.hook";
import { useSliderMarks } from "./use-slider-marks.hook";

export function useSlider({
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
  value: valueProp,
}: UseSliderOptions): UseSliderResult {
  const [interactionRevision, setInteractionRevision] = useState(0);
  const slidingRef = useRef(false);
  const currentValueRef = useRef(defaultValue);

  const bounds = useMemo(
    () => getSliderBounds(min, max, step),
    [max, min, step],
  );

  const [value, setValue] = useControllableState<number>({
    prop: valueProp,
    defaultProp: normalizeSliderValue(defaultValue, bounds),
    onChange: onValueChange,
  });

  const normalizedValue = normalizeSliderValue(value, bounds);
  const displayValue = useSharedValue(normalizedValue);
  const steppedValue = useSharedValue(normalizedValue);
  const trackWidth = useSharedValue(0);

  const { labelMarks, marks: markLayouts } = useSliderMarks({
    bounds,
    marks,
    formatValue,
    startValue: bounds.min,
    endValue: normalizedValue,
  });

  const positionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          (getSliderPercentage(displayValue.get(), bounds) / 100) *
          trackWidth.get(),
      },
    ],
  }));
  const activeTrackStyle = useAnimatedStyle(() => ({
    left: "0%",
    width: `${getSliderPercentage(displayValue.get(), bounds)}%`,
  }));
  const valueLabel = formatSliderValue(normalizedValue, formatValue);

  const updateFromPosition = useEventCallback(
    (position: number, width: number) => {
      if (disabled) {
        return;
      }

      const nextValue = getValueFromPosition(position, width, bounds);

      if (nextValue === currentValueRef.current) {
        return;
      }

      currentValueRef.current = nextValue;

      if (valueProp !== undefined) {
        onValueChange?.(nextValue);
      } else {
        setValue(nextValue);
      }
    },
  );

  const handleSlidingStart = useEventCallback(
    (position: number, width: number) => {
      slidingRef.current = true;

      onSlidingStart?.(currentValueRef.current);
      updateFromPosition(position, width);
    },
  );

  const handleSlidingComplete = useEventCallback(() => {
    slidingRef.current = false;
    setInteractionRevision((revision) => revision + 1);

    onSlidingComplete?.(currentValueRef.current);
  });

  const updateDisplayPosition = useCallback(
    (position: number, width: number): boolean => {
      "worklet";

      const continuousValue = getContinuousValueFromPosition(
        position,
        width,
        bounds,
      );
      displayValue.set(continuousValue);

      onValueChangeWorklet?.(continuousValue);

      const nextValue = normalizeSliderValue(continuousValue, bounds);

      if (nextValue === steppedValue.get()) {
        return false;
      }

      steppedValue.set(nextValue);

      return true;
    },
    [bounds, displayValue, onValueChangeWorklet, steppedValue],
  );

  const { gesture, handleLayout } = useSliderInteraction({
    disabled,
    width: trackWidth,
    onEnd: handleSlidingComplete,
    onLayout,
    onMove: updateFromPosition,
    onPosition: updateDisplayPosition,
    onStart: handleSlidingStart,
  });

  useEffect(() => {
    if (!slidingRef.current) {
      currentValueRef.current = normalizedValue;
      displayValue.set(normalizedValue);
      steppedValue.set(normalizedValue);
    }
  }, [displayValue, interactionRevision, normalizedValue, steppedValue]);

  return {
    activeTrackStyle,
    bounds,
    gesture,
    handleLayout,
    labelMarks,
    marks: markLayouts,
    positionStyle,
    valueLabel,
  };
}
