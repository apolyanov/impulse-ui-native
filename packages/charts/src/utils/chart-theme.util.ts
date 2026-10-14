import type { AppTheme, ChartsLabelTokens } from "@impulse-ui-native/theme";
import { createChartsLabelTokens } from "@impulse-ui-native/theme";

export function resolveChartLabelTokens(theme: AppTheme): ChartsLabelTokens {
  return theme.components.charts.label ?? createChartsLabelTokens(theme);
}
