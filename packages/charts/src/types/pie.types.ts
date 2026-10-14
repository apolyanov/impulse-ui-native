import type { AppTheme } from "@impulse-ui-native/theme";

import { PieChartCoordinate, PieChartSliceOptions } from "./pie-chart.types";

export interface PieProps extends PieChartSliceOptions {
  coordinates: readonly PieChartCoordinate[];
  theme: AppTheme;
}
