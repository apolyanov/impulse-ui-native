import { Skia, SkPath } from "@shopify/react-native-skia";
import { line as createD3Line, curveLinear, curveMonotoneX } from "d3-shape";

import {
  ChartRect,
  ChartXValue,
  LineChartCoordinate,
  LineChartCurve,
} from "../types";

export function createLinePath<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  curve: LineChartCurve,
): SkPath | null {
  const pathData = createD3Line<LineChartCoordinate<X>>()
    .defined((coordinate) => coordinate.x !== null && coordinate.y !== null)
    .x((coordinate) => coordinate.x!)
    .y((coordinate) => coordinate.y!)
    .curve(curve === "monotone" ? curveMonotoneX : curveLinear)(coordinates);

  return pathData ? Skia.Path.MakeFromSVGString(pathData) : null;
}

export function fitLineCoordinatesToRect<X extends ChartXValue>(
  coordinates: readonly LineChartCoordinate<X>[],
  source: ChartRect,
  target: ChartRect,
): LineChartCoordinate<X>[] {
  return coordinates.map((coordinate) => ({
    ...coordinate,
    x:
      coordinate.x === null
        ? null
        : mapCoordinate(
            coordinate.x,
            source.x,
            source.width,
            target.x,
            target.width,
          ),
    y:
      coordinate.y === null
        ? null
        : mapCoordinate(
            coordinate.y,
            source.y,
            source.height,
            target.y,
            target.height,
          ),
  }));
}

function mapCoordinate(
  value: number,
  sourceStart: number,
  sourceLength: number,
  targetStart: number,
  targetLength: number,
): number {
  if (sourceLength <= 0) {
    return targetStart + targetLength / 2;
  }

  return targetStart + ((value - sourceStart) / sourceLength) * targetLength;
}
