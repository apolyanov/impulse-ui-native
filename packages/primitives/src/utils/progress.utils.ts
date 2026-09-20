export interface NormalizedProgressValue {
  fraction: number;
  max: number;
  min: number;
  value: number | undefined;
}

export function normalizeProgressValue(
  value: number | undefined,
  min: number,
  max: number,
): NormalizedProgressValue {
  const resolvedMin = Number.isFinite(min) ? min : 0;
  const resolvedMax =
    Number.isFinite(max) && max > resolvedMin ? max : resolvedMin + 100;

  if (value === undefined) {
    return {
      fraction: 0,
      max: resolvedMax,
      min: resolvedMin,
      value: undefined,
    };
  }

  const finiteValue = Number.isFinite(value) ? value : resolvedMin;
  const resolvedValue = Math.min(
    Math.max(finiteValue, resolvedMin),
    resolvedMax,
  );

  return {
    fraction: (resolvedValue - resolvedMin) / (resolvedMax - resolvedMin),
    max: resolvedMax,
    min: resolvedMin,
    value: resolvedValue,
  };
}
