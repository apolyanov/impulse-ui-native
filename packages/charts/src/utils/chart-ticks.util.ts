import { LineChartDefaultTickCount } from "../constants/line-chart.constants";
import { normalizeChartNumber } from "./chart-number.util";

export function getChartTickCount(value: number | undefined): number {
  return Math.floor(normalizeChartNumber(value, LineChartDefaultTickCount));
}

export function selectChartTicks<Value>(
  values: readonly Value[],
  count: number,
): Value[] {
  if (count <= 0 || values.length === 0) {
    return [];
  }

  if (values.length <= count) {
    return [...values];
  }

  if (count === 1) {
    return values.slice(0, 1);
  }

  const lastIndex = values.length - 1;

  return Array.from(
    { length: count },
    (_, index) => values[Math.round((index * lastIndex) / (count - 1))]!,
  );
}
