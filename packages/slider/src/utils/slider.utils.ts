import type { ViewStyle } from "react-native";

import type { SliderThumb, SliderValue } from "../types";
import type {
  SliderBounds,
  SliderRoundingMode,
} from "../types/slider-value.types";

// Worklet dependencies must be initialized before the factories that capture them.
function getDecimalPlaces(value: number): number {
  "worklet";

  const [coefficient = "", exponent = "0"] = String(value)
    .toLowerCase()
    .split("e");
  const [, decimals = ""] = coefficient.split(".");

  return Math.max(0, decimals.length - Number(exponent));
}

function getRangeSliderGap(
  bounds: SliderBounds,
  minStepsBetweenThumbs: number,
): number {
  "worklet";

  const minimumSteps = Number.isFinite(minStepsBetweenThumbs)
    ? Math.max(0, minStepsBetweenThumbs)
    : 0;

  return Math.min(bounds.max - bounds.min, minimumSteps * bounds.step);
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
  rounding: SliderRoundingMode = "nearest",
): number {
  "worklet";

  const { min, max, step } = bounds;
  const clamped = Math.min(
    Math.max(Number.isFinite(value) ? value : min, min),
    max,
  );

  // The upper endpoint is valid even when it falls between grid steps.
  if (clamped === max) {
    return max;
  }

  const stepPosition = (clamped - min) / step;
  const nearestStep = Math.round(stepPosition);
  // Avoid choosing the adjacent step because of floating-point division noise.
  const stablePosition =
    Math.abs(stepPosition - nearestStep) <=
    Number.EPSILON * Math.max(1, Math.abs(stepPosition)) * 4
      ? nearestStep
      : stepPosition;
  const roundedStep =
    rounding === "down"
      ? Math.floor(stablePosition)
      : rounding === "up"
        ? Math.ceil(stablePosition)
        : Math.round(stablePosition);
  const snapped = min + roundedStep * step;
  const precision = Math.min(
    100,
    Math.max(
      getDecimalPlaces(min),
      getDecimalPlaces(max),
      getDecimalPlaces(step),
    ),
  );

  return Number(Math.min(Math.max(snapped, min), max).toFixed(precision));
}

export function normalizeRangeValue(
  value: SliderValue,
  bounds: SliderBounds,
  minStepsBetweenThumbs: number,
): SliderValue {
  const gap = getRangeSliderGap(bounds, minStepsBetweenThumbs);
  const first = normalizeSliderValue(Math.min(value[0], value[1]), bounds);
  const second = normalizeSliderValue(Math.max(value[0], value[1]), bounds);
  const maximumStart = normalizeSliderValue(bounds.max - gap, bounds, "down");
  const start = Math.min(first, maximumStart);
  const minimumEnd = normalizeSliderValue(start + gap, bounds, "up");
  const end = Math.max(second, minimumEnd);

  return [start, Math.min(end, bounds.max)];
}

export function getSliderPercentage(
  value: number,
  bounds: SliderBounds,
): number {
  "worklet";

  return ((value - bounds.min) / (bounds.max - bounds.min)) * 100;
}

export function getSliderPositionStyle(percentage: number): ViewStyle {
  return {
    left: `${percentage}%`,
  };
}

export function getContinuousValueFromPosition(
  position: number,
  width: number,
  bounds: SliderBounds,
): number {
  "worklet";

  if (width <= 0) {
    return bounds.min;
  }

  const ratio = Math.min(Math.max(position / width, 0), 1);

  return bounds.min + ratio * (bounds.max - bounds.min);
}

export function getValueFromPosition(
  position: number,
  width: number,
  bounds: SliderBounds,
): number {
  "worklet";

  return normalizeSliderValue(
    getContinuousValueFromPosition(position, width, bounds),
    bounds,
  );
}

export function getClosestThumb(
  value: number,
  range: SliderValue,
): SliderThumb {
  "worklet";

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
  "worklet";

  const gap = getRangeSliderGap(bounds, minStepsBetweenThumbs);

  if (thumb === "start") {
    return [
      normalizeSliderValue(Math.min(nextValue, range[1] - gap), bounds, "down"),
      range[1],
    ];
  }

  return [
    range[0],
    normalizeSliderValue(Math.max(nextValue, range[0] + gap), bounds, "up"),
  ];
}

export function updateRangeDisplayThumb(
  range: SliderValue,
  thumb: SliderThumb,
  nextValue: number,
  bounds: SliderBounds,
  minStepsBetweenThumbs: number,
): SliderValue {
  "worklet";

  const gap = getRangeSliderGap(bounds, minStepsBetweenThumbs);

  if (thumb === "start") {
    return [
      Math.max(bounds.min, Math.min(nextValue, range[1] - gap)),
      range[1],
    ];
  }

  return [range[0], Math.min(bounds.max, Math.max(nextValue, range[0] + gap))];
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
