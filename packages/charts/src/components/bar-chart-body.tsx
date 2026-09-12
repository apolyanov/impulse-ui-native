import { Group } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { AppTheme } from "@impulse-ui-native/theme";

import { useBarChart, useChartLayout } from "../hooks";
import { BarChartProps, ChartSize, ChartXValue } from "../types";
import { ChartAxes } from "./chart-axes";
import { Bar } from "./primitives";

interface BarChartBodyProps<X extends ChartXValue> extends BarChartProps<X> {
  size: ChartSize;
  theme: AppTheme;
}

export const BarChartBody = memo(function BarChartBodyComponent<
  X extends ChartXValue = string,
>(props: BarChartBodyProps<X>) {
  const {
    bar,
    categoryPadding,
    data,
    fontManager,
    grid,
    insets,
    size,
    theme,
    xAxis,
    yAxis,
  } = props;
  const layout = useChartLayout(size, insets);
  const { coordinates, xScale, xTicks, yScale, yTicks } = useBarChart({
    categoryPadding,
    data,
    plot: layout.plot,
    xAxis,
    yAxis,
  });

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
        <Bar coordinates={coordinates} {...bar} />
      </Group>
    </>
  );
});
