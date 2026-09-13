import { ChartInsets, ChartLayout, ChartRect, ChartSize } from "../types";

export function createChartLayout(
  size: ChartSize,
  insets: Partial<ChartInsets> = {},
  defaultInsets: Partial<ChartInsets> = {},
): ChartLayout {
  const resolvedInsets: ChartInsets = {
    top: insets.top ?? defaultInsets.top ?? 0,
    right: insets.right ?? defaultInsets.right ?? 0,
    bottom: insets.bottom ?? defaultInsets.bottom ?? 0,
    left: insets.left ?? defaultInsets.left ?? 0,
  };

  const plotWidth = Math.max(
    0,
    size.width - resolvedInsets.left - resolvedInsets.right,
  );
  const plotHeight = Math.max(
    0,
    size.height - resolvedInsets.top - resolvedInsets.bottom,
  );

  const plot = {
    x: resolvedInsets.left,
    y: resolvedInsets.top,
    width: plotWidth,
    height: plotHeight,
  };

  return {
    size,
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
