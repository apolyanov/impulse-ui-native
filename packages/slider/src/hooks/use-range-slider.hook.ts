import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";

import type { SliderThumb, SliderValue } from "../types";
import type {
  RangeSliderThumbBehavior,
  UseRangeSliderOptions,
  UseRangeSliderResult,
} from "../types/slider-internal.types";
import {
  formatSliderValue,
  getClosestThumb,
  getContinuousValueFromPosition,
  getSliderBounds,
  getSliderPercentage,
  getValueFromPosition,
  normalizeRangeValue,
  normalizeSliderValue,
  updateRangeDisplayThumb,
  updateRangeThumb,
} from "../utils";
import { useSliderInteraction } from "./use-slider-interaction.hook";
import { useSliderMarks } from "./use-slider-marks.hook";

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
  const [interactionRevision, setInteractionRevision] = useState(0);
  const slidingRef = useRef(false);
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

  const displayValue = useSharedValue<SliderValue>(normalizedValue);
  const steppedValue = useSharedValue<SliderValue>(normalizedValue);
  const trackWidth = useSharedValue(0);
  const activeThumb = useSharedValue<SliderThumb>("start");

  const { labelMarks, marks: markLayouts } = useSliderMarks({
    bounds,
    marks,
    formatValue,
    startValue: normalizedValue[0],
    endValue: normalizedValue[1],
  });

  const startPositionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          (getSliderPercentage(displayValue.get()[0], bounds) / 100) *
          trackWidth.get(),
      },
    ],
  }));
  const endPositionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          (getSliderPercentage(displayValue.get()[1], bounds) / 100) *
          trackWidth.get(),
      },
    ],
  }));
  const activeTrackStyle = useAnimatedStyle(() => {
    const range = displayValue.get();
    const start = getSliderPercentage(range[0], bounds);
    const end = getSliderPercentage(range[1], bounds);

    return { left: `${start}%`, width: `${end - start}%` };
  });
  const commitRange = useEventCallback((nextValue: SliderValue) => {
    if (
      nextValue[0] === currentValueRef.current[0] &&
      nextValue[1] === currentValueRef.current[1]
    ) {
      return;
    }

    currentValueRef.current = nextValue;

    setValue(nextValue);
  });

  const updateThumbFromPosition = useEventCallback(
    (thumb: SliderThumb, position: number, width: number) => {
      if (disabled) {
        return;
      }

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
      const positionValue = getContinuousValueFromPosition(
        position,
        width,
        bounds,
      );
      const thumb = getClosestThumb(positionValue, currentValueRef.current);

      activeThumbRef.current = thumb;
      slidingRef.current = true;

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
    slidingRef.current = false;
    setInteractionRevision((revision) => revision + 1);

    onSlidingComplete?.(currentValueRef.current);
  });

  const updateDisplayPosition = useCallback(
    (position: number, width: number, starting: boolean): boolean => {
      "worklet";

      const range = displayValue.get();
      const positionValue = getContinuousValueFromPosition(
        position,
        width,
        bounds,
      );

      if (starting) {
        activeThumb.set(getClosestThumb(positionValue, range));
      }

      displayValue.set(
        updateRangeDisplayThumb(
          range,
          activeThumb.get(),
          positionValue,
          bounds,
          minStepsBetweenThumbs,
        ),
      );

      const previousValue = steppedValue.get();
      const nextValue = updateRangeThumb(
        previousValue,
        activeThumb.get(),
        normalizeSliderValue(positionValue, bounds),
        bounds,
        minStepsBetweenThumbs,
      );

      if (
        nextValue[0] === previousValue[0] &&
        nextValue[1] === previousValue[1]
      ) {
        return false;
      }

      steppedValue.set(nextValue);

      return true;
    },
    [activeThumb, bounds, displayValue, minStepsBetweenThumbs, steppedValue],
  );

  const { gesture, handleLayout } = useSliderInteraction({
    disabled,
    width: trackWidth,
    onEnd: handleSlidingComplete,
    onLayout,
    onMove: handleSlidingMove,
    onPosition: updateDisplayPosition,
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
    if (!slidingRef.current) {
      currentValueRef.current = normalizedValue;
      displayValue.set(normalizedValue);
      steppedValue.set(normalizedValue);
    }
  }, [displayValue, interactionRevision, normalizedValue, steppedValue]);

  return {
    activeTrackStyle,
    bounds,
    endThumb,
    gesture,
    handleLayout,
    labelMarks,
    marks: markLayouts,
    startThumb,
  };
}
