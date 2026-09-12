import { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import { AppTheme } from "@impulse-ui-native/theme";

import { ChartAxisOptions, ChartPoint, ChartRect } from "./common.types";
import { ChartXValue, LineChartScale } from "./line-chart.types";

export interface AxisTick<Value> {
  value: Value;
  position: number;
}

export interface AxisLineLayout {
  start: ChartPoint;
  end: ChartPoint;
}

export interface AxisTickLayout<Value> extends AxisTick<Value>, AxisLineLayout {
  labelRect: ChartRect;
}

export interface AxisLayout<Value> {
  line: AxisLineLayout;
  ticks: readonly AxisTickLayout<Value>[];
}

export interface CreateAxisLayoutProps<Value> {
  values: readonly Value[];
  scale: LineChartScale<Value>;
  plot: ChartRect;
  region: ChartRect;
  tickLength: number;
  labelGap: number;
}

export interface CreateYAxisLayoutProps extends CreateAxisLayoutProps<number> {
  fontSize: number;
}

export interface AxisProps<Value> {
  ticks: readonly Value[];
  scale: LineChartScale<Value>;
  plot: ChartRect;
  region: ChartRect;
  theme: AppTheme;
  options?: ChartAxisOptions<Value>;
  fontManager?: SkTypefaceFontProvider;
  lineVisible?: boolean;
  tickVisible?: boolean;
}

export interface XAxisProps<
  X extends ChartXValue = number,
> extends AxisProps<X> {}

export interface YAxisProps extends AxisProps<number> {}
