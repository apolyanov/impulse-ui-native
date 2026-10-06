import type { ViewStyle } from "react-native";
import { useEffect, useMemo, useRef } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type {
  SliderMarkLayout,
  UseSliderOptions,
  UseSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getSliderActiveTrackStyle,
  getSliderBounds,
  getSliderPercentage,
  getSliderPositionStyle,
  getValueFromPosition,
  normalizeSliderMarks,
  normalizeSliderValue,
} from "../utils";
import { useSliderInteraction } from "./use-slider-interaction.hook";

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
  step,
  value: valueProp,
}: UseSliderOptions): UseSliderResult {
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
  const percentage = getSliderPercentage(normalizedValue, bounds);

  const normalizedMarks = useMemo(
    () => normalizeSliderMarks(marks, bounds),
    [bounds, marks],
  );

  const positionStyle = useMemo<ViewStyle>(
    () => getSliderPositionStyle(percentage),
    [percentage],
  );
  const activeTrackStyle = useMemo<ViewStyle>(
    () => getSliderActiveTrackStyle(0, percentage),
    [percentage],
  );
  const markLayouts = useMemo<readonly SliderMarkLayout[]>(
    () =>
      normalizedMarks.map((mark) => {
        const markPercentage = getSliderPercentage(mark, bounds);

        return {
          active: mark <= normalizedValue,
          endpoint:
            mark === bounds.min
              ? "start"
              : mark === bounds.max
                ? "end"
                : undefined,
          label: formatSliderValue(mark, formatValue),
          position: getSliderPositionStyle(markPercentage),
          value: mark,
        };
      }),
    [bounds, formatValue, normalizedMarks, normalizedValue],
  );

  const valueLabel = formatSliderValue(normalizedValue, formatValue);

  const updateFromPosition = useEventCallback(
    (position: number, width: number) => {
      if (disabled) {
        return;
      }

      const nextValue = getValueFromPosition(position, width, bounds);

      currentValueRef.current = nextValue;

      setValue(nextValue);
    },
  );

  const handleSlidingStart = useEventCallback(
    (position: number, width: number) => {
      onSlidingStart?.(currentValueRef.current);
      updateFromPosition(position, width);
    },
  );

  const handleSlidingComplete = useEventCallback(() => {
    onSlidingComplete?.(currentValueRef.current);
  });

  const { interactionHandlers, trackRef } = useSliderInteraction({
    disabled,
    onEnd: handleSlidingComplete,
    onLayout,
    onMove: updateFromPosition,
    onStart: handleSlidingStart,
  });

  useEffect(() => {
    currentValueRef.current = normalizedValue;
  }, [normalizedValue]);

  return {
    activeTrackStyle,
    bounds,
    interactionHandlers,
    marks: markLayouts,
    positionStyle,
    trackRef,
    valueLabel,
  };
}
