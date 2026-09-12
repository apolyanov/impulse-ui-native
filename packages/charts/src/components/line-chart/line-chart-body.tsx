import { useMemo } from "react";
import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { AppTheme } from "@impulse-ui-native/theme";

import { LineDefaultWidth } from "../../constants";
import { useChartLayout, useLineChart } from "../../hooks";
import { ChartSize, ChartXValue, LineChartProps } from "../../types";
import { createInsetRect, fitLineCoordinatesToRect } from "../../utils";
import { Grid, Line, XAxis, YAxis } from "../primitives";

interface LineChartBodyProps<X extends ChartXValue> extends LineChartProps<X> {
  size: ChartSize;
  theme: AppTheme;
}

export const LineChartBody = memo(function LineChartBodyComponent<
  X extends ChartXValue = number,
>(props: LineChartBodyProps<X>) {
  const {
    data,
    fontManager,
    grid,
    insets,
    line,
    size,
    theme,
    xAxis,
    xScaleType,
    yAxis,
  } = props;

  const layout = useChartLayout(size, insets);

  const { coordinates, xScale, xTicks, yScale, yTicks } = useLineChart({
    data,
    plot: layout.plot,
    xAxis,
    xScaleType,
    yAxis,
  });

  const linePlot = useMemo(
    () => createInsetRect(layout.plot, (line?.width ?? LineDefaultWidth) / 2),
    [layout.plot, line?.width],
  );

  const lineCoordinates = useMemo(
    () => fitLineCoordinatesToRect(coordinates, layout.plot, linePlot),
    [coordinates, layout.plot, linePlot],
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
        <Line coordinates={lineCoordinates} {...line} />
      </Group>
    </>
  );
});
