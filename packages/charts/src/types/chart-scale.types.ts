import type { ChartNumericDomain } from "./common.types";
import type { ChartXValue, LineChartScale } from "./line-chart.types";

export interface ChartCartesianScaleModel<X extends ChartXValue> {
  xDomain: readonly X[];
  yDomain: ChartNumericDomain;
  xTicks: readonly X[];
  yTicks: readonly number[];
  xScale: LineChartScale<X>;
  yScale: LineChartScale<number>;
}

export interface ChartNumericScaleModel {
  domain: ChartNumericDomain;
  ticks: readonly number[];
  scale: LineChartScale<number>;
}

export interface BarChartScaleModel<
  X extends ChartXValue,
> extends ChartCartesianScaleModel<X> {
  xStartScale: LineChartScale<X>;
  bandwidth: number;
  baseline: number;
}
