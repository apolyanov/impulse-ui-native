import { memo } from "@impulse-ui-native/core";

import { useChartLayout, useMultiPieChart } from "../hooks";
import { ChartSize, MultiPieChartProps } from "../types";
import { Pie } from "./primitives";

interface MultiPieChartBodyProps extends MultiPieChartProps {
  size: ChartSize;
}

export const MultiPieChartBody = memo(function MultiPieChartBody(
  props: MultiPieChartBodyProps,
) {
  const {
    endAngle,
    innerRadius,
    insets,
    outerRadius,
    padAngle,
    ringPadding,
    series,
    size,
    startAngle,
  } = props;
  const layout = useChartLayout(size, insets);
  const { series: seriesModels } = useMultiPieChart({
    endAngle,
    innerRadius,
    outerRadius,
    padAngle,
    plot: layout.plot,
    ringPadding,
    series,
    startAngle,
  });

  return (
    <>
      {seriesModels.map((currentSeries) => (
        <Pie
          key={currentSeries.id}
          coordinates={currentSeries.coordinates}
          {...currentSeries.slice}
        />
      ))}
    </>
  );
});
