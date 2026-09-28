import type {
  AccessibilityValue,
  GestureResponderEvent,
  LayoutChangeEvent,
  View,
  ViewStyle,
} from "react-native";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { I18nManager } from "react-native";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type {
  SliderInteractionHandlers,
  SliderMarkLayout,
  UseSliderOptions,
  UseSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getKeyboardSliderValue,
  getSliderBounds,
  getSliderPercentage,
  getValueFromPosition,
  normalizeSliderMarks,
  normalizeSliderValue,
} from "../utils";

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
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<View | null>(null);
  const trackPageXRef = useRef(0);
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
    () => ({
      [I18nManager.isRTL ? "right" : "left"]: `${percentage}%`,
    }),
    [percentage],
  );
  const activeTrackStyle = useMemo<ViewStyle>(
    () => ({
      [I18nManager.isRTL ? "right" : "left"]: 0,
      width: `${percentage}%`,
    }),
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
          position: {
            [I18nManager.isRTL ? "right" : "left"]: `${markPercentage}%`,
          },
          value: mark,
        };
      }),
    [bounds, formatValue, normalizedMarks, normalizedValue],
  );
  const valueLabel = formatSliderValue(normalizedValue, formatValue);

  const updateFromPosition = useEventCallback((position: number) => {
    if (disabled) return;

    const nextValue = getValueFromPosition(position, trackWidth, bounds);
    currentValueRef.current = nextValue;
    setValue(nextValue);
  });

  const updateFromPageX = useEventCallback((pageX: number) => {
    updateFromPosition(pageX - trackPageXRef.current);
  });

  const measureTrack = useEventCallback(() => {
    trackRef.current?.measureInWindow((x) => {
      trackPageXRef.current = x;
    });
  });

  const handleLayout = useEventCallback((event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
    measureTrack();
    onLayout?.(event);
  });

  const handleResponderGrant = useEventCallback(
    (event: GestureResponderEvent) => {
      onSlidingStart?.(currentValueRef.current);
      measureTrack();
      updateFromPageX(event.nativeEvent.pageX);
    },
  );

  const handleResponderMove = useEventCallback(
    (event: GestureResponderEvent) => {
      updateFromPageX(event.nativeEvent.pageX);
    },
  );

  const handleResponderRelease = useEventCallback(() => {
    onSlidingComplete?.(currentValueRef.current);
  });

  const handleStartShouldSetResponder = useCallback(
    () => !disabled,
    [disabled],
  );

  const handleResponderTerminationRequest = useCallback(() => false, []);

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

  const interactionHandlers = useMemo<SliderInteractionHandlers>(
    () => ({
      onLayout: handleLayout,
      onMoveShouldSetResponder: handleStartShouldSetResponder,
      onMoveShouldSetResponderCapture: handleStartShouldSetResponder,
      onResponderGrant: handleResponderGrant,
      onResponderMove: handleResponderMove,
      onResponderRelease: handleResponderRelease,
      onResponderTerminate: handleResponderRelease,
      onResponderTerminationRequest: handleResponderTerminationRequest,
      onStartShouldSetResponder: handleStartShouldSetResponder,
      onStartShouldSetResponderCapture: handleStartShouldSetResponder,
    }),
    [
      handleLayout,
      handleResponderGrant,
      handleResponderMove,
      handleResponderRelease,
      handleResponderTerminationRequest,
      handleStartShouldSetResponder,
    ],
  );

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
