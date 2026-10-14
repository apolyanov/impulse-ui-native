import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartTooltipProps } from "../types";
import { ChartRow } from "./chart-row";
import { ChartSwatch } from "./chart-swatch";
import { ChartText } from "./chart-text";

export const ChartTooltip = memo(function ChartTooltip({
  details,
  style,
  ...props
}: ChartTooltipProps) {
  const theme = useTheme();
  const styles = useThemedStyles(themedStyles);
  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );
  const color =
    theme.components.charts.tooltip?.color ?? theme.colors.text.primary;

  return (
    <View {...props} style={containerStyle}>
      {details.map((detail) => (
        <ChartRow
          style={styles.row}
          key={
            (detail.selection.seriesId ?? "") +
            ":" +
            detail.selection.datumIndex
          }
        >
          <ChartSwatch color={detail.color} />
          <ChartText numeric color={color} flexShrink={1}>
            {detail.label}: {detail.value}
          </ChartText>
        </ChartRow>
      ))}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.charts.tooltip;

  return StyleSheet.create({
    row: { gap: tokens?.gap ?? theme.space.xs },
    container: {
      backgroundColor:
        tokens?.backgroundColor ?? theme.colors.surface.elevated.value,
      borderColor: tokens?.borderColor ?? theme.colors.border.subtle.value,
      borderWidth: tokens?.borderWidth ?? theme.borderSize.sm,
      borderRadius: tokens?.borderRadius ?? theme.radii.sm,
      padding: tokens?.padding ?? theme.space.xs,
      gap: tokens?.gap ?? theme.space.xs,
    },
  });
}
