import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartLegendProps } from "../types";
import { ChartLegendEntry } from "./chart-legend-item";

export const ChartLegend = memo(function ChartLegend({
  items,
  hiddenIds,
  onToggle,
}: ChartLegendProps) {
  const styles = useThemedStyles(themedStyles);

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <ChartLegendEntry
          key={item.id}
          item={item}
          hidden={hiddenIds?.includes(item.id) ?? false}
          onToggle={onToggle}
        />
      ))}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    container: { flexDirection: "row", flexWrap: "wrap", gap: theme.space.xxs },
  });
}
