import { scaleLinear } from "d3-scale";

import type { ChartNumericDomain } from "../types";
import type { ChartNumericScaleModel } from "../types/chart-scale.types";
import {
  ChartLargeScaleMagnitude,
  ChartSmallScaleMagnitude,
} from "../constants/chart-scale.constants";
import { normalizeNumericDomain } from "./numeric-domain.util";

/** Normalize extreme domains so D3's domain difference cannot overflow. */
export function createChartNumericScale(
  domain: ChartNumericDomain,
  range: ChartNumericDomain,
  tickCount: number,
  nice: boolean,
): ChartNumericScaleModel {
  const normalized = normalizeNumericDomain(domain);
  const magnitude = Math.max(Math.abs(normalized[0]), Math.abs(normalized[1]));
  const unit =
    magnitude > ChartLargeScaleMagnitude ||
    (magnitude > 0 && magnitude < ChartSmallScaleMagnitude)
      ? magnitude
      : 1;
  const d3Scale = scaleLinear()
    .domain(normalized.map((value) => value / unit))
    .range(range);

  if (nice && tickCount > 0) {
    d3Scale.nice(tickCount);
  }

  const scaledDomain = d3Scale.domain();
  const minimum = clampFiniteNumber((scaledDomain[0] ?? 0) * unit);
  const maximum = clampFiniteNumber((scaledDomain[1] ?? 1) * unit);
  const resolvedDomain: ChartNumericDomain = nice
    ? [minimum, maximum]
    : normalized;

  // If nice rounded past Number.MAX_VALUE, align the scale with the clamped domain.
  d3Scale.domain(resolvedDomain.map((value) => value / unit));

  return {
    domain: resolvedDomain,
    ticks: d3Scale
      .ticks(tickCount)
      .map((value) => value * unit)
      .filter(Number.isFinite),
    scale: (value) =>
      Number.isFinite(value) ? d3Scale(value / unit) : undefined,
  };
}

function clampFiniteNumber(value: number): number {
  return Math.max(-Number.MAX_VALUE, Math.min(Number.MAX_VALUE, value));
}
