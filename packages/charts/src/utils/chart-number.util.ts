export function normalizeChartNumber(
  value: number | undefined,
  fallback: number,
  minimum = 0,
  maximum = Infinity,
): number {
  const resolved =
    value !== undefined && Number.isFinite(value) ? value : fallback;

  return Math.min(
    maximum,
    Math.max(minimum, Number.isFinite(resolved) ? resolved : minimum),
  );
}

export function isFiniteChartCoordinate(
  value: number | undefined,
): value is number {
  return value !== undefined && Number.isFinite(value);
}
