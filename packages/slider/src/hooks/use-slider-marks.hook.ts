import { useMemo } from "react";

import type {
  SliderMarkDefinition,
  SliderMarkLayout,
  UseSliderMarksOptions,
  UseSliderMarksResult,
} from "../types/slider-marks.types";
import {
  formatSliderValue,
  getSliderPercentage,
  getSliderPositionStyle,
  normalizeSliderMarks,
} from "../utils";

export function useSliderMarks({
  bounds,
  marks,
  formatValue,
  startValue,
  endValue,
}: UseSliderMarksOptions): UseSliderMarksResult {
  const labelMarks = useMemo<readonly SliderMarkDefinition[]>(
    () =>
      normalizeSliderMarks(marks, bounds).map((value) => ({
        endpoint:
          value === bounds.min
            ? "start"
            : value === bounds.max
              ? "end"
              : undefined,
        label: formatSliderValue(value, formatValue),
        position: getSliderPositionStyle(getSliderPercentage(value, bounds)),
        value,
      })),
    [bounds, formatValue, marks],
  );
  const markLayouts = useMemo<readonly SliderMarkLayout[]>(
    () =>
      labelMarks.map((mark) => ({
        ...mark,
        active: mark.value >= startValue && mark.value <= endValue,
      })),
    [endValue, labelMarks, startValue],
  );

  return { labelMarks, marks: markLayouts };
}
