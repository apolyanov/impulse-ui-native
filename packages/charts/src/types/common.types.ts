import type { SkTypefaceFontProvider } from "@shopify/react-native-skia";

import type { ChartPresentationProps } from "./chart-interaction.types";
import type { ChartGridOptions } from "./grid.types";
import { ChartLabelStyle, ChartStrokeStyle } from "./style.types";

export type ChartScaleType = "linear" | "point" | "time";

export type ChartNumericDomain = readonly [minimum: number, maximum: number];

export interface ChartInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ChartSize {
  width: number;
  height: number;
}

export interface ChartPoint {
  x: number;
  y: number;
}

export interface ChartRect extends ChartSize {
  x: number;
  y: number;
}

export interface ChartLayout {
  size: ChartSize;
  insets: ChartInsets;
  plot: ChartRect;
  xAxis: ChartRect;
  yAxis: ChartRect;
}

export interface ChartAxisOptions<Value> {
  visible?: boolean;
  tickCount?: number;
  format?: (value: Value) => string;
  line?: ChartAxisLineOptions;
  tick?: ChartAxisTickOptions;
  label?: ChartAxisLabelOptions;
}

export interface ChartAxisLineOptions extends ChartStrokeStyle {
  visible?: boolean;
}

export interface ChartAxisTickOptions extends ChartStrokeStyle {
  visible?: boolean;
  length?: number;
}

export interface ChartAxisLabelOptions extends ChartLabelStyle {
  visible?: boolean;
  gap?: number;
  rotation?: number;
}

export interface ChartXAxisOptions<X> extends ChartAxisOptions<X> {}

export interface ChartYAxisOptions extends ChartAxisOptions<number> {
  domain?: ChartNumericDomain;
}

export interface ChartContainerProps extends ChartPresentationProps {
  insets?: Partial<ChartInsets>;
}

export interface ChartCartesianProps<X> extends ChartContainerProps {
  fontManager?: SkTypefaceFontProvider;
  grid?: ChartGridOptions;
  xAxis?: ChartXAxisOptions<X>;
  yAxis?: ChartYAxisOptions;
}
