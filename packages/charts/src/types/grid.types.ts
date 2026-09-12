import { AppTheme } from "@impulse-ui-native/theme";

import { ChartRect } from "./common.types";
import { ChartXValue, LineChartScale } from "./line-chart.types";
import { ChartStrokeStyle } from "./style.types";

export interface ChartGridLineOptions extends ChartStrokeStyle {
  visible?: boolean;
}

export interface ChartGridOptions {
  x?: boolean | ChartGridLineOptions;
  y?: boolean | ChartGridLineOptions;
}

export interface ResolvedGridLineOptions {
  visible: boolean;
  color: string;
  width: number;
  opacity: number;
  dash?: readonly number[];
}

export interface GridProps<X extends ChartXValue = number> {
  options?: ChartGridOptions;
  plot: ChartRect;
  theme: AppTheme;
  xTicks: readonly X[];
  xScale: LineChartScale<X>;
  yTicks: readonly number[];
  yScale: LineChartScale<number>;
}
