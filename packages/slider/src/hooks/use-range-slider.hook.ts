import type { ViewStyle } from "react-native";
import { useEffect, useMemo, useRef } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type { SliderThumb, SliderValue } from "../types";
import type {
  RangeSliderThumbBehavior,
  SliderMarkLayout,
  UseRangeSliderOptions,
  UseRangeSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getClosestThumb,
  getSliderActiveTrackStyle,
  getSliderBounds,
  getSliderPercentage,
  getSliderPositionStyle,
  getValueFromPosition,
  normalizeRangeValue,
  normalizeSliderMarks,
  updateRangeThumb,
} from "../utils";
import { useSliderInteraction } from "./use-slider-interaction.hook";

export function useRangeSlider({
  defaultValue,
  disabled,
  formatValue,
  marks,
  max,
  min,
  minStepsBetweenThumbs,
  onLayout,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
  step,
  value: valueProp,
}: UseRangeSliderOptions): UseRangeSliderResult {
  const activeThumbRef = useRef<SliderThumb>("start");
  const currentValueRef = useRef<SliderValue>(defaultValue);
  const bounds = useMemo(
    () => getSliderBounds(min, max, step),
    [max, min, step],
  );
  const [value, setValue] = useControllableState<SliderValue>({
    prop: valueProp,
    defaultProp: normalizeRangeValue(
      defaultValue,
      bounds,
      minStepsBetweenThumbs,
    ),
    onChange: onValueChange,
  });
  const normalizedValue = useMemo(
    () => normalizeRangeValue(value, bounds, minStepsBetweenThumbs),
    [bounds, minStepsBetweenThumbs, value],
  );
  const startPercentage = getSliderPercentage(normalizedValue[0], bounds);
  const endPercentage = getSliderPercentage(normalizedValue[1], bounds);
  const normalizedMarks = useMemo(
    () => normalizeSliderMarks(marks, bounds),
    [bounds, marks],
  );

  const startPositionStyle = useMemo<ViewStyle>(
    () => getSliderPositionStyle(startPercentage),
    [startPercentage],
  );
  const endPositionStyle = useMemo<ViewStyle>(
    () => getSliderPositionStyle(endPercentage),
    [endPercentage],
  );
  const activeTrackStyle = useMemo<ViewStyle>(
    () => getSliderActiveTrackStyle(startPercentage, endPercentage),
    [endPercentage, startPercentage],
  );
  const markLayouts = useMemo<readonly SliderMarkLayout[]>(
    () =>
      normalizedMarks.map((mark) => {
        const percentage = getSliderPercentage(mark, bounds);

        return {
          active: mark >= normalizedValue[0] && mark <= normalizedValue[1],
          endpoint:
            mark === bounds.min
              ? "start"
              : mark === bounds.max
                ? "end"
                : undefined,
          label: formatSliderValue(mark, formatValue),
          position: getSliderPositionStyle(percentage),
          value: mark,
        };
      }),
    [bounds, formatValue, normalizedMarks, normalizedValue],
  );

  const commitRange = useEventCallback((nextValue: SliderValue) => {
    currentValueRef.current = nextValue;
    setValue(nextValue);
  });

  const updateThumbFromPosition = useEventCallback(
    (thumb: SliderThumb, position: number, width: number) => {
      if (disabled) return;

      const positionValue = getValueFromPosition(position, width, bounds);
      commitRange(
        updateRangeThumb(
          currentValueRef.current,
          thumb,
          positionValue,
          bounds,
          minStepsBetweenThumbs,
        ),
      );
    },
  );

  const handleSlidingStart = useEventCallback(
    (position: number, width: number) => {
      const positionValue = getValueFromPosition(position, width, bounds);
      const thumb = getClosestThumb(positionValue, currentValueRef.current);

      activeThumbRef.current = thumb;
      onSlidingStart?.(currentValueRef.current);
      updateThumbFromPosition(thumb, position, width);
    },
  );

  const handleSlidingMove = useEventCallback(
    (position: number, width: number) => {
      updateThumbFromPosition(activeThumbRef.current, position, width);
    },
  );

  const handleSlidingComplete = useEventCallback(() => {
    onSlidingComplete?.(currentValueRef.current);
  });

  const { interactionHandlers, trackRef } = useSliderInteraction({
    disabled,
    onEnd: handleSlidingComplete,
    onLayout,
    onMove: handleSlidingMove,
    onStart: handleSlidingStart,
  });
  const startThumb = useMemo<RangeSliderThumbBehavior>(
    () => ({
      positionStyle: startPositionStyle,
      valueLabel: formatSliderValue(normalizedValue[0], formatValue),
    }),
    [formatValue, normalizedValue, startPositionStyle],
  );
  const endThumb = useMemo<RangeSliderThumbBehavior>(
    () => ({
      positionStyle: endPositionStyle,
      valueLabel: formatSliderValue(normalizedValue[1], formatValue),
    }),
    [endPositionStyle, formatValue, normalizedValue],
  );

  useEffect(() => {
    currentValueRef.current = normalizedValue;
  }, [normalizedValue]);

  return {
    activeTrackStyle,
    bounds,
    endThumb,
    interactionHandlers,
    marks: markLayouts,
    startThumb,
    trackRef,
  };
}
