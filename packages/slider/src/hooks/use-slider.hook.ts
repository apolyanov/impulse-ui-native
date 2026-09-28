import type { AccessibilityValue, ViewStyle } from "react-native";
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
  getKeyboardSliderValue,
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

  const resolvedAccessibilityState = useMemo(
    () => ({
      ...accessibilityState,
      disabled,
    }),
    [accessibilityState, disabled],
  );
  const resolvedAccessibilityValue = useMemo<AccessibilityValue>(
    () => ({
      ...accessibilityValue,
      max: bounds.max,
      min: bounds.min,
      now: normalizedValue,
      text: formatSliderValue(normalizedValue, formatValue),
    }),
    [accessibilityValue, bounds.max, bounds.min, formatValue, normalizedValue],
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
      if (disabled) return;

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

  const updateFromKey = useEventCallback((key: string) => {
    if (disabled) return false;

    const nextValue = getKeyboardSliderValue(
      key,
      currentValueRef.current,
      bounds,
    );

    if (nextValue === undefined) return false;

    currentValueRef.current = nextValue;
    setValue(nextValue);
    onSlidingComplete?.(nextValue);
    return true;
  });

  const handleKeyDown = useEventCallback<UseSliderResult["onKeyDown"]>(
    (event) => {
      onKeyDown?.(event);
      if (event.isDefaultPrevented()) return;

      if (updateFromKey(event.nativeEvent.key)) {
        event.preventDefault();
      }
    },
  );

  const handleIncrement = useEventCallback(() => {
    updateFromKey("ArrowUp");
  });

  const handleDecrement = useEventCallback(() => {
    updateFromKey("ArrowDown");
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
    accessibilityState: resolvedAccessibilityState,
    accessibilityValue: resolvedAccessibilityValue,
    activeTrackStyle,
    bounds,
    interactionHandlers,
    marks: markLayouts,
    onDecrement: handleDecrement,
    onIncrement: handleIncrement,
    onKeyDown: handleKeyDown,
    positionStyle,
    trackRef,
    valueLabel,
  };
}
