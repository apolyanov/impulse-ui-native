import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { AppTheme } from "@impulse-ui-native/theme";

import { useChartLayout, useMultiBarChart } from "../../hooks";
import { ChartSize, ChartXValue, MultiBarChartProps } from "../../types";
import { createDrawableMultiBarChartSeries } from "../../utils";
import { ChartAxes } from "../chart-axes";
import { Bar } from "../primitives";

interface MultiBarChartBodyProps<
  X extends ChartXValue,
> extends MultiBarChartProps<X> {
  size: ChartSize;
  theme: AppTheme;
}

export const MultiBarChartBody = memo(function MultiBarChartBodyComponent<
  X extends ChartXValue = string,
>(props: MultiBarChartBodyProps<X>) {
  const {
    categoryPadding,
    fontManager,
    grid,
    insets,
    series,
    seriesPadding,
    size,
    theme,
    xAxis,
    yAxis,
  } = props;
  const layout = useChartLayout(size, insets);
  const {
    series: seriesModels,
    xScale,
    xTicks,
    yScale,
    yTicks,
  } = useMultiBarChart({
    categoryPadding,
    plot: layout.plot,
    series,
    seriesPadding,
    xAxis,
    yAxis,
  });
  const drawableSeries = useMemo(
    () =>
      seriesModels.map((currentSeries, index) =>
        createDrawableMultiBarChartSeries(currentSeries, index),
      ),
    [seriesModels],
  );

  return (
    <>
      <ChartAxes
        fontManager={fontManager}
        grid={grid}
        layout={layout}
        theme={theme}
        xAxis={xAxis}
        xScale={xScale}
        xTicks={xTicks}
        yAxis={yAxis}
        yScale={yScale}
        yTicks={yTicks}
      />

      <Group clip={layout.plot}>
        {drawableSeries.map((currentSeries) => (
          <Bar
            key={currentSeries.id}
            coordinates={currentSeries.coordinates}
            {...currentSeries.bar}
          />
        ))}
      </Group>
    </>
  );
});
