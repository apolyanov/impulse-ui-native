import type {
  BarChartCoordinate,
  BarChartOrientation,
  BarChartPoint,
  ChartXValue,
} from "../types";
import type {
  BarChartStackOffsets,
  BarChartStackValue,
} from "../types/bar-stack.types";
import type { BarChartScaleModel } from "../types/chart-scale.types";
import { createBarChartRectangle } from "./bar-geometry.util";
import { getChartCategoryKey } from "./chart-interaction.util";
import { isFiniteChartCoordinate } from "./chart-number.util";
import { isValidChartXValue } from "./numeric-domain.util";

export function createStackedBarDomainData<X extends ChartXValue>(
  data: readonly BarChartPoint<X>[],
): BarChartPoint<X>[] {
  const totals = new Map<string, BarChartStackValue & { x: X }>();

  for (const datum of data) {
    if (!isValidChartXValue(datum.x)) {
      continue;
    }

    const key = getChartCategoryKey(datum.x);
    const total = totals.get(key) ?? { x: datum.x, positive: 0, negative: 0 };

    if (datum.y !== null && Number.isFinite(datum.y)) {
      const side = datum.y >= 0 ? "positive" : "negative";
      total[side] = addFinite(total[side], datum.y);
    }

    totals.set(key, total);
  }

  return [...totals.values()].flatMap((total) => [
    { x: total.x, y: total.positive },
    { x: total.x, y: total.negative },
  ]);
}

export function createStackedBarCoordinates<X extends ChartXValue>(
  data: readonly BarChartPoint<X>[],
  model: BarChartScaleModel<X>,
  offsets: BarChartStackOffsets,
  orientation?: BarChartOrientation,
): BarChartCoordinate<X>[] {
  return data.flatMap((datum, index) => {
    const category = model.xStartScale(datum.x);

    if (
      !isFiniteChartCoordinate(category) ||
      datum.y === null ||
      !Number.isFinite(datum.y) ||
      model.bandwidth <= 0
    ) {
      return [];
    }

    const key = getChartCategoryKey(datum.x);
    const offset = offsets.get(key) ?? { positive: 0, negative: 0 };
    const side = datum.y >= 0 ? "positive" : "negative";
    const start = model.yScale(offset[side]);
    offset[side] = addFinite(offset[side], datum.y);
    offsets.set(key, offset);
    const end = model.yScale(offset[side]);

    if (!isFiniteChartCoordinate(start) || !isFiniteChartCoordinate(end)) {
      return [];
    }

    return [
      createBarChartRectangle(
        datum,
        index,
        category,
        start,
        end,
        model.bandwidth,
        orientation,
      ),
    ];
  });
}

function addFinite(left: number, right: number): number {
  return Math.max(-Number.MAX_VALUE, Math.min(Number.MAX_VALUE, left + right));
}
