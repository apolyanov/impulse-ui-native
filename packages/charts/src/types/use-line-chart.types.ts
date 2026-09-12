import {
  ChartNumericDomain,
  ChartRect,
  ChartScaleType,
  ChartXAxisOptions,
  ChartYAxisOptions,
} from "./common.types";
import {
  ChartXValue,
  LineChartCoordinate,
  LineChartPoint,
  LineChartScale,
} from "./line-chart.types";

export interface UseLineChartProps<X extends ChartXValue = number> {
  data: readonly LineChartPoint<X>[];
  plot: ChartRect;
  xScaleType?: ChartScaleType;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
}

export interface UseLineChartResult<X extends ChartXValue = number> {
  xDomain: readonly X[];
  yDomain: ChartNumericDomain;
  xTicks: readonly X[];
  yTicks: readonly number[];
  coordinates: readonly LineChartCoordinate<X>[];
  xScale: LineChartScale<X>;
  yScale: LineChartScale<number>;
}

export interface LineChartXScaleModel<X extends ChartXValue> {
  domain: readonly X[];
  ticks: readonly X[];
  scale: LineChartScale<X>;
}
