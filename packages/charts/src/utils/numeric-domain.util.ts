import type { ChartNumericDomain, ChartXValue } from "../types";

export function isValidChartXValue(value: ChartXValue): boolean {
  return value instanceof Date
    ? Number.isFinite(value.getTime())
    : typeof value === "string" || Number.isFinite(value);
}

export function normalizeNumericDomain(
  domain: ChartNumericDomain,
): ChartNumericDomain {
  const [minimum, maximum] = domain;

  if (!Number.isFinite(minimum) || !Number.isFinite(maximum)) {
    return [0, 1];
  }

  if (minimum !== maximum) {
    return domain;
  }

  const padding = Math.max(1, Math.abs(minimum) * 0.05);

  return [
    Number.isFinite(minimum - padding) ? minimum - padding : minimum,
    Number.isFinite(maximum + padding) ? maximum + padding : maximum,
  ];
}
