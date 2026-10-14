import type {
  BarChartCoordinate,
  BarChartOrientation,
  BarChartPoint,
  ChartXValue,
} from "../types";

export function createBarChartRectangle<X extends ChartXValue>(
  datum: BarChartPoint<X>,
  index: number,
  category: number,
  start: number,
  end: number,
  bandwidth: number,
  orientation: BarChartOrientation = "vertical",
): BarChartCoordinate<X> {
  const horizontal = orientation === "horizontal";

  return {
    datum,
    index,
    x: horizontal ? Math.min(start, end) : category,
    y: horizontal ? category : Math.min(start, end),
    width: horizontal ? Math.abs(end - start) : bandwidth,
    height: horizontal ? bandwidth : Math.abs(end - start),
  };
}
