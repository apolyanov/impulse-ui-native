import { Skia, SkPath } from "@shopify/react-native-skia";
import { arc } from "d3-shape";

import { PieChartCoordinate } from "../types";

export function createPieSlicePath(
  coordinate: PieChartCoordinate,
  cornerRadius = 0,
): SkPath | null {
  const pathData = arc()
    .cornerRadius(Math.max(0, cornerRadius))
    .padRadius(coordinate.padRadius)({
    innerRadius: coordinate.innerRadius,
    outerRadius: coordinate.outerRadius,
    startAngle: coordinate.startAngle,
    endAngle: coordinate.endAngle,
    padAngle: coordinate.padAngle,
  });

  if (!pathData) {
    return null;
  }

  return Skia.Path.MakeFromSVGString(pathData);
}
