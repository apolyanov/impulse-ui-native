import type { ViewStyle } from "react-native";
import { I18nManager } from "react-native";

import type { SliderThumb, SliderValue } from "../types";

export interface SliderBounds {
  max: number;
  min: number;
  step: number;
}

export function getSliderBounds(
  minValue: number,
  maxValue: number,
  stepValue: number,
): SliderBounds {
  const min = Number.isFinite(minValue) ? minValue : 0;
  const step = Number.isFinite(stepValue) && stepValue > 0 ? stepValue : 1;
  const max =
    Number.isFinite(maxValue) && maxValue > min ? maxValue : min + step;

  return { max, min, step };
}

export function normalizeSliderValue(
  value: number,
  bounds: SliderBounds,
): number {
  const { min, max, step } = bounds;
  const clamped = Math.min(
    Math.max(Number.isFinite(value) ? value : min, min),
    max,
  );
  const snapped = min + Math.round((clamped - min) / step) * step;
  const precision = Math.max(getDecimalPlaces(min), getDecimalPlaces(step));

  return Number(Math.min(Math.max(snapped, min), max).toFixed(precision));
}

export function normalizeRangeValue(
  value: SliderValue,
  bounds: SliderBounds,
  minStepsBetweenThumbs: number,
): SliderValue {
  const minimumSteps = Number.isFinite(minStepsBetweenThumbs)
    ? Math.max(0, minStepsBetweenThumbs)
    : 0;
  const gap = Math.min(bounds.max - bounds.min, minimumSteps * bounds.step);
  const first = normalizeSliderValue(Math.min(value[0], value[1]), bounds);
  const second = normalizeSliderValue(Math.max(value[0], value[1]), bounds);
  const maximumStart = normalizeSliderValue(bounds.max - gap, bounds);
  const start = Math.min(first, maximumStart);
  const minimumEnd = normalizeSliderValue(start + gap, bounds);
  const end = Math.max(second, minimumEnd);

  return [start, Math.min(end, bounds.max)];
}

export function getSliderPercentage(
  value: number,
  bounds: SliderBounds,
): number {
  return ((value - bounds.min) / (bounds.max - bounds.min)) * 100;
}

export function getSliderPositionStyle(percentage: number): ViewStyle {
  return {
    [I18nManager.isRTL ? "right" : "left"]: `${percentage}%`,
  };
}

export function getSliderActiveTrackStyle(
  startPercentage: number,
  endPercentage: number,
): ViewStyle {
  return {
    ...getSliderPositionStyle(startPercentage),
    width: `${endPercentage - startPercentage}%`,
  };
}

export function getValueFromPosition(
  position: number,
  width: number,
  bounds: SliderBounds,
): number {
  if (width <= 0) {
    return bounds.min;
  }

  const logicalPosition = I18nManager.isRTL ? width - position : position;
  const ratio = Math.min(Math.max(logicalPosition / width, 0), 1);

  return normalizeSliderValue(
    bounds.min + ratio * (bounds.max - bounds.min),
    bounds,
  );
}

export function getClosestThumb(
  value: number,
  range: SliderValue,
): SliderThumb {
  return Math.abs(value - range[0]) <= Math.abs(value - range[1])
    ? "start"
    : "end";
}

export function updateRangeThumb(
  range: SliderValue,
  thumb: SliderThumb,
  nextValue: number,
  bounds: SliderBounds,
  minStepsBetweenThumbs: number,
): SliderValue {
  const minimumSteps = Number.isFinite(minStepsBetweenThumbs)
    ? Math.max(0, minStepsBetweenThumbs)
    : 0;
  const gap = Math.min(bounds.max - bounds.min, minimumSteps * bounds.step);

  if (thumb === "start") {
    return [
      normalizeSliderValue(Math.min(nextValue, range[1] - gap), bounds),
      range[1],
    ];
  }

  return [
    range[0],
    normalizeSliderValue(Math.max(nextValue, range[0] + gap), bounds),
  ];
}

export function normalizeSliderMarks(
  marks: readonly number[] | undefined,
  bounds: SliderBounds,
): number[] {
  if (!marks) {
    return [];
  }

  return Array.from(
    new Set(
      marks
        .filter(Number.isFinite)
        .map((mark) => normalizeSliderValue(mark, bounds)),
    ),
  ).sort((first, second) => first - second);
}

export function formatSliderValue(
  value: number,
  formatter: ((value: number) => string) | undefined,
): string {
  return formatter?.(value) ?? String(value);
}

function getDecimalPlaces(value: number): number {
  const [, decimals = ""] = String(value).split(".");

  return decimals.length;
}
