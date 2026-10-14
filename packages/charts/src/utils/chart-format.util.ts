import type { ChartXValue } from "../types";

export function formatChartXValue(value: ChartXValue): string {
  return value instanceof Date && Number.isFinite(value.getTime())
    ? value.toISOString().slice(0, 10)
    : String(value);
}

export function formatChartTargetLabel<X extends ChartXValue>(
  value: X,
  seriesLabel?: string,
  format?: (value: X) => string,
): string {
  const text = format ? format(value) : formatChartXValue(value);

  return seriesLabel ? `${seriesLabel}: ${text}` : text;
}
