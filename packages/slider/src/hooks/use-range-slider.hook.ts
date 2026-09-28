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

import type { SliderKeyDownEvent, SliderThumb, SliderValue } from "../types";
import type {
  RangeSliderThumbBehavior,
  SliderInteractionHandlers,
  SliderMarkLayout,
  UseRangeSliderOptions,
  UseRangeSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getClosestThumb,
  getKeyboardSliderValue,
  getSliderBounds,
  getSliderPercentage,
  getValueFromPosition,
  normalizeRangeValue,
  normalizeSliderMarks,
  updateRangeThumb,
} from "../utils";

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
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<View | null>(null);
  const trackPageXRef = useRef(0);
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
  const normalizedValue = normalizeRangeValue(
    value,
    bounds,
    minStepsBetweenThumbs,
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
    () => ({
      [I18nManager.isRTL ? "right" : "left"]: `${startPercentage}%`,
    }),
    [startPercentage],
  );
  const endPositionStyle = useMemo<ViewStyle>(
    () => ({
      [I18nManager.isRTL ? "right" : "left"]: `${endPercentage}%`,
    }),
    [endPercentage],
  );
  const activeTrackStyle = useMemo<ViewStyle>(
    () => ({
      [I18nManager.isRTL ? "right" : "left"]: `${startPercentage}%`,
      width: `${endPercentage - startPercentage}%`,
    }),
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
          position: {
            [I18nManager.isRTL ? "right" : "left"]: `${percentage}%`,
          },
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
    (thumb: SliderThumb, position: number) => {
      if (disabled) return;

      const positionValue = getValueFromPosition(position, trackWidth, bounds);
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

  const updateThumbFromPageX = useEventCallback(
    (thumb: SliderThumb, pageX: number) => {
      updateThumbFromPosition(thumb, pageX - trackPageXRef.current);
    },
  );

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
      const position = event.nativeEvent.pageX - trackPageXRef.current;
      const positionValue = getValueFromPosition(position, trackWidth, bounds);
      const thumb = getClosestThumb(positionValue, currentValueRef.current);

      activeThumbRef.current = thumb;
      onSlidingStart?.(currentValueRef.current);
      measureTrack();
      updateThumbFromPosition(thumb, position);
    },
  );

  const handleResponderMove = useEventCallback(
    (event: GestureResponderEvent) => {
      updateThumbFromPageX(activeThumbRef.current, event.nativeEvent.pageX);
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
  const startThumb = useMemo<RangeSliderThumbBehavior>(
    () => ({
      accessibilityValue: resolvedAccessibilityValues[0],
      onDecrement: handleStartDecrement,
      onIncrement: handleStartIncrement,
      onKeyDown: handleStartKeyDown,
      positionStyle: startPositionStyle,
      thumb: "start",
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
      thumb: "end",
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
