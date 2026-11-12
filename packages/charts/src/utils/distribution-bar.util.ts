import type { DistributionBarItem } from "../types/distribution-bar.types";

/** Scale before summing to keep proportions finite even for very large values. */
export function getDistributionBarSegments(
  data: readonly DistributionBarItem[],
): (DistributionBarItem & { fraction: number })[] {
  const valid = data.filter(
    (item) => Number.isFinite(item.value) && item.value > 0,
  );
  const maximum = valid.reduce(
    (result, item) => Math.max(result, item.value),
    0,
  );
  const total = valid.reduce(
    (result, item) => result + item.value / maximum,
    0,
  );

  return valid.map((item) => ({
    ...item,
    fraction: item.value / maximum / total,
  }));
}
