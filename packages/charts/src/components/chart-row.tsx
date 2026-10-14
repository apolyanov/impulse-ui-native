import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { ViewProps } from "@impulse-ui-native/primitives";
import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

export const ChartRow = memo(function ChartRow({ style, ...props }: ViewProps) {
  const styles = useThemedStyles(themedStyles);
  const rowStyle = useMemo(() => [styles.row, style], [styles.row, style]);

  return <View {...props} style={rowStyle} />;
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.components.charts.legend?.gap ?? theme.space.xs,
    },
  });
}
