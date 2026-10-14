import { ChartInsets, ChartLayout, ChartRect, ChartSize } from "../types";
import { normalizeChartNumber } from "./chart-number.util";

export function createChartLayout(
  size: ChartSize,
  insets: Partial<ChartInsets> = {},
  defaultInsets: Partial<ChartInsets> = {},
): ChartLayout {
  const resolvedSize = {
    width: normalizeChartNumber(size.width, 0),
    height: normalizeChartNumber(size.height, 0),
  };
  const resolvedInsets: ChartInsets = {
    top: normalizeChartNumber(insets.top, defaultInsets.top ?? 0),
    right: normalizeChartNumber(insets.right, defaultInsets.right ?? 0),
    bottom: normalizeChartNumber(insets.bottom, defaultInsets.bottom ?? 0),
    left: normalizeChartNumber(insets.left, defaultInsets.left ?? 0),
  };

  const horizontalRatio = Math.min(
    1,
    resolvedSize.width / (resolvedInsets.left + resolvedInsets.right || 1),
  );
  const verticalRatio = Math.min(
    1,
    resolvedSize.height / (resolvedInsets.top + resolvedInsets.bottom || 1),
  );
  resolvedInsets.left *= horizontalRatio;
  resolvedInsets.right *= horizontalRatio;
  resolvedInsets.top *= verticalRatio;
  resolvedInsets.bottom *= verticalRatio;

  const plotWidth = Math.max(
    0,
    resolvedSize.width - resolvedInsets.left - resolvedInsets.right,
  );
  const plotHeight = Math.max(
    0,
    resolvedSize.height - resolvedInsets.top - resolvedInsets.bottom,
  );

  const plot = {
    x: resolvedInsets.left,
    y: resolvedInsets.top,
    width: plotWidth,
    height: plotHeight,
  };

  return {
    size: resolvedSize,
    insets: resolvedInsets,
    plot,
    xAxis: {
      x: plot.x,
      y: plot.y + plot.height,
      width: plot.width,
      height: resolvedInsets.bottom,
    },
    yAxis: {
      x: 0,
      y: plot.y,
      width: resolvedInsets.left,
      height: plot.height,
    },
  };
}

export function createInsetRect(rect: ChartRect, amount: number): ChartRect {
  const inset = Math.max(0, amount);
  const horizontalInset = Math.min(inset, rect.width / 2);
  const verticalInset = Math.min(inset, rect.height / 2);

  return {
    x: rect.x + horizontalInset,
    y: rect.y + verticalInset,
    width: Math.max(0, rect.width - horizontalInset * 2),
    height: Math.max(0, rect.height - verticalInset * 2),
  };
}

/** Keep stroke centers on the scale while allowing endpoint caps to extend. */
export function createChartStrokeClip(
  plot: ChartRect,
  width: number,
  size: ChartSize,
): ChartRect {
  const padding = Number.isFinite(width) ? Math.max(0, width / 2) : 0;
  const x = Math.max(0, plot.x - padding);
  const y = Math.max(0, plot.y - padding);

  return {
    x,
    y,
    width: Math.max(0, Math.min(size.width, plot.x + plot.width + padding) - x),
    height: Math.max(
      0,
      Math.min(size.height, plot.y + plot.height + padding) - y,
    ),
  };
}
