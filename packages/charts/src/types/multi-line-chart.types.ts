import { AppTheme } from "@impulse-ui-native/theme";

import { ChartSize } from "./common.types";
import {
  ChartXValue,
  LineChartCommonProps,
  LineChartCoordinate,
  LineChartLineOptions,
  LineChartPoint,
} from "./line-chart.types";

export interface MultiLineChartSeries<X extends ChartXValue = number> {
  id: string;
  data: readonly LineChartPoint<X>[];
  line?: LineChartLineOptions;
}

export interface MultiLineChartSeriesModel<
  X extends ChartXValue = number,
> extends MultiLineChartSeries<X> {
  coordinates: readonly LineChartCoordinate<X>[];
}

export interface MultiLineChartProps<
  X extends ChartXValue = number,
> extends LineChartCommonProps<X> {
  series: readonly MultiLineChartSeries<X>[];
}

export interface MultiLineChartBodyProps<
  X extends ChartXValue = number,
> extends MultiLineChartProps<X> {
  size: ChartSize;
  theme: AppTheme;
}
