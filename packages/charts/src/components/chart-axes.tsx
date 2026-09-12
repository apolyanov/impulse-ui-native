import { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import { memo } from "@impulse-ui-native/core";
import { AppTheme } from "@impulse-ui-native/theme";

import {
  ChartGridOptions,
  ChartLayout,
  ChartXAxisOptions,
  ChartXValue,
  ChartYAxisOptions,
  LineChartScale,
} from "../types";
import { Grid, XAxis, YAxis } from "./primitives";

interface ChartAxesProps<X extends ChartXValue> {
  fontManager?: SkTypefaceFontProvider;
  grid?: ChartGridOptions;
  layout: ChartLayout;
  theme: AppTheme;
  xAxis?: ChartXAxisOptions<X>;
  xScale: LineChartScale<X>;
  xTicks: readonly X[];
  yAxis?: ChartYAxisOptions;
  yScale: LineChartScale<number>;
  yTicks: readonly number[];
}

export const ChartAxes = memo(function ChartAxes<
  X extends ChartXValue = number,
>(props: ChartAxesProps<X>) {
  const {
    fontManager,
    grid,
    layout,
    theme,
    xAxis,
    xScale,
    xTicks,
    yAxis,
    yScale,
    yTicks,
  } = props;
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
    </>
  );
});
