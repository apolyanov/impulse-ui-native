import type { AccessibilityValue, ViewStyle } from "react-native";
import { useEffect, useMemo, useRef } from "react";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type { SliderKeyDownEvent, SliderThumb, SliderValue } from "../types";
import type {
  RangeSliderThumbBehavior,
  SliderMarkLayout,
  UseRangeSliderOptions,
  UseRangeSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getClosestThumb,
  getKeyboardSliderValue,
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

  const resolvedAccessibilityState = useMemo(
    () => ({
      ...accessibilityState,
      disabled,
    }),
    [accessibilityState, disabled],
  );
  const resolvedAccessibilityValues = useMemo<
    readonly [AccessibilityValue, AccessibilityValue]
  >(
    () => [
      {
        ...accessibilityValues?.[0],
        max: normalizedValue[1],
        min: bounds.min,
        now: normalizedValue[0],
        text: formatSliderValue(normalizedValue[0], formatValue),
      },
      {
        ...accessibilityValues?.[1],
        max: bounds.max,
        min: normalizedValue[0],
        now: normalizedValue[1],
        text: formatSliderValue(normalizedValue[1], formatValue),
      },
    ],
    [accessibilityValues, bounds.max, bounds.min, formatValue, normalizedValue],
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

  const updateThumbFromKey = useEventCallback(
    (thumb: SliderThumb, key: string) => {
      if (disabled) return false;

      const index = thumb === "start" ? 0 : 1;
      const nextValue = getKeyboardSliderValue(
        key,
        currentValueRef.current[index],
        bounds,
      );

      if (nextValue === undefined) return false;

      const nextRange = updateRangeThumb(
        currentValueRef.current,
        thumb,
        nextValue,
        bounds,
        minStepsBetweenThumbs,
      );
      commitRange(nextRange);
      onSlidingComplete?.(nextRange);
      return true;
    },
  );

  const handleStartKeyDown = useEventCallback((event: SliderKeyDownEvent) => {
    onKeyDown?.("start", event);
    if (event.isDefaultPrevented()) return;

    if (updateThumbFromKey("start", event.nativeEvent.key)) {
      event.preventDefault();
    }
  });

  const handleEndKeyDown = useEventCallback((event: SliderKeyDownEvent) => {
    onKeyDown?.("end", event);
    if (event.isDefaultPrevented()) return;

    if (updateThumbFromKey("end", event.nativeEvent.key)) {
      event.preventDefault();
    }
  });

  const handleStartIncrement = useEventCallback(() => {
    updateThumbFromKey("start", "ArrowUp");
  });

  const handleStartDecrement = useEventCallback(() => {
    updateThumbFromKey("start", "ArrowDown");
  });

  const handleEndIncrement = useEventCallback(() => {
    updateThumbFromKey("end", "ArrowUp");
  });

  const handleEndDecrement = useEventCallback(() => {
    updateThumbFromKey("end", "ArrowDown");
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
      accessibilityValue: resolvedAccessibilityValues[0],
      onDecrement: handleStartDecrement,
      onIncrement: handleStartIncrement,
      onKeyDown: handleStartKeyDown,
      positionStyle: startPositionStyle,
      valueLabel: formatSliderValue(normalizedValue[0], formatValue),
    }),
    [
      formatValue,
      handleStartDecrement,
      handleStartIncrement,
      handleStartKeyDown,
      normalizedValue,
      resolvedAccessibilityValues,
      startPositionStyle,
    ],
  );
  const endThumb = useMemo<RangeSliderThumbBehavior>(
    () => ({
      accessibilityValue: resolvedAccessibilityValues[1],
      onDecrement: handleEndDecrement,
      onIncrement: handleEndIncrement,
      onKeyDown: handleEndKeyDown,
      positionStyle: endPositionStyle,
      valueLabel: formatSliderValue(normalizedValue[1], formatValue),
    }),
    [
      endPositionStyle,
      formatValue,
      handleEndDecrement,
      handleEndIncrement,
      handleEndKeyDown,
      normalizedValue,
      resolvedAccessibilityValues,
    ],
  );

  useEffect(() => {
    currentValueRef.current = normalizedValue;
  }, [normalizedValue]);

  return {
    accessibilityState: resolvedAccessibilityState,
    activeTrackStyle,
    bounds,
    endThumb,
    interactionHandlers,
    marks: markLayouts,
    startThumb,
    trackRef,
  };
}
