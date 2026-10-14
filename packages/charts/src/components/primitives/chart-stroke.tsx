import { useMemo } from "react";
import { DashPathEffect, Line } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import type { ChartStrokeProps } from "../../types/chart-axis.types";

export const ChartStroke = memo(function ChartStroke({
  start,
  end,
  color,
  width,
  opacity,
  dash,
  visible = true,
}: ChartStrokeProps) {
  const intervals = useMemo(() => (dash ? [...dash] : []), [dash]);

  if (!visible) {
    return null;
  }

  return (
    <Line
      p1={start}
      p2={end}
      color={color}
      strokeWidth={width}
      opacity={opacity}
    >
      {intervals.length > 0 ? <DashPathEffect intervals={intervals} /> : null}
    </Line>
  );
});
