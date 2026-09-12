import { memo } from "@impulse-ui-native/core";

import { useChartLayout, usePieChart } from "../hooks";
import { ChartSize, PieChartProps } from "../types";
import { Pie } from "./primitives";

interface PieChartBodyProps extends PieChartProps {
  size: ChartSize;
}

export const PieChartBody = memo(function PieChartBody(
  props: PieChartBodyProps,
) {
  const {
    data,
    endAngle,
    innerRadius,
    insets,
    outerRadius,
    padAngle,
    size,
    slice,
    startAngle,
  } = props;
  const layout = useChartLayout(size, insets);
  const { coordinates } = usePieChart({
    data,
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot: layout.plot,
    startAngle,
  });

  return <Pie coordinates={coordinates} {...slice} />;
});
