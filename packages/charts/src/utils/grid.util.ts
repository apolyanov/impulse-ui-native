import { Skia, SkPath } from "@shopify/react-native-skia";

import { GridDefaultOpacity, GridDefaultWidth } from "../constants";
import {
  ChartGridLineOptions,
  ChartRect,
  LineChartScale,
  ResolvedGridLineOptions,
} from "../types";
import { createAxisTicks } from "./axis.util";

export function createVerticalGridPath<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
  plot: ChartRect,
): SkPath | null {
  const ticks = createAxisTicks(values, scale);

  if (ticks.length === 0) {
    return null;
  }

  const path = Skia.PathBuilder.Make();

  ticks.forEach(({ position }) => {
    path.moveTo(position, plot.y);
    path.lineTo(position, plot.y + plot.height);
  });

  return path.detach();
}

export function createHorizontalGridPath<Value>(
  values: readonly Value[],
  scale: LineChartScale<Value>,
  plot: ChartRect,
): SkPath | null {
  const ticks = createAxisTicks(values, scale);

  if (ticks.length === 0) {
    return null;
  }

  const path = Skia.PathBuilder.Make();

  ticks.forEach(({ position }) => {
    path.moveTo(plot.x, position);
    path.lineTo(plot.x + plot.width, position);
  });

  return path.detach();
}

export function resolveGridLineOptions(
  options: boolean | ChartGridLineOptions | undefined,
  defaultVisible: boolean,
  defaultColor: string,
): ResolvedGridLineOptions {
  if (typeof options === "boolean") {
    return {
      visible: options,
      color: defaultColor,
      width: GridDefaultWidth,
      opacity: GridDefaultOpacity,
    };
  }

  return {
    visible: isGridLineVisible(options, defaultVisible),
    color: options?.color ?? defaultColor,
    width: options?.width ?? GridDefaultWidth,
    opacity: options?.opacity ?? GridDefaultOpacity,
    dash: options?.dash,
  };
}

function isGridLineVisible(
  options: boolean | ChartGridLineOptions | undefined,
  defaultVisible: boolean,
): boolean {
  if (typeof options === "boolean") {
    return options;
  }

  return options?.visible ?? defaultVisible;
}
