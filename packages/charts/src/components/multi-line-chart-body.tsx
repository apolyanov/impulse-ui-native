import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";

import { useChartLayout, useMultiLineChart } from "../hooks";
import { ChartXValue, MultiLineChartBodyProps } from "../types";
import { createDrawableMultiLineChartSeries } from "../utils";
import { Grid, Line, XAxis, YAxis } from "./primitives";

export const MultiLineChartBody = memo(function MultiLineChartBodyComponent<
  X extends ChartXValue = number,
>(props: MultiLineChartBodyProps<X>) {
  const {
    fontManager,
    grid,
    insets,
    series,
    size,
    theme,
    xAxis,
    xScaleType,
    yAxis,
  } = props;

  const layout = useChartLayout(size, insets);

  const {
    series: seriesModels,
    xScale,
    xTicks,
    yScale,
    yTicks,
  } = useMultiLineChart({
    plot: layout.plot,
    series,
    xAxis,
    xScaleType,
    yAxis,
  });

  const drawableSeries = useMemo(
    () =>
      seriesModels.map((currentSeries, index) =>
        createDrawableMultiLineChartSeries(currentSeries, index, layout.plot),
      ),
    [layout.plot, seriesModels],
  );

  const isGridStyle = grid !== undefined;

  return (
    <>
      {isGridStyle ? (
        <Grid
          options={grid}
          plot={layout.plot}
          theme={theme}
          xTicks={xTicks}
          xScale={xScale}
          yTicks={yTicks}
          yScale={yScale}
        />
      ) : null}

      {xAxis?.visible !== false ? (
        <XAxis
          ticks={xTicks}
          scale={xScale}
          plot={layout.plot}
          region={layout.xAxis}
          theme={theme}
          options={xAxis}
          fontManager={fontManager}
          lineVisible={!isGridStyle}
          tickVisible={!isGridStyle}
        />
      ) : null}

      {yAxis?.visible !== false ? (
        <YAxis
          ticks={yTicks}
          scale={yScale}
          plot={layout.plot}
          region={layout.yAxis}
          theme={theme}
          options={yAxis}
          fontManager={fontManager}
          lineVisible={!isGridStyle}
          tickVisible={!isGridStyle}
        />
      ) : null}

      <Group clip={layout.plot}>
        {drawableSeries.map((currentSeries) => (
          <Line
            key={currentSeries.id}
            coordinates={currentSeries.coordinates}
            {...currentSeries.line}
          />
        ))}
      </Group>
    </>
  );
});
