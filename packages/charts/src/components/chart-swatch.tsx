import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartSwatchProps } from "../types/chart-swatch.types";

export const ChartSwatch = memo(function ChartSwatch({
  color,
  colors,
}: ChartSwatchProps) {
  const styles = useThemedStyles(themedStyles);
  const style = useMemo(
    () => [styles.swatch, { backgroundColor: color }],
    [styles.swatch, color],
  );

  return (
    <View style={style}>
      {colors?.map((segmentColor, index) => (
        <View key={index} flex={1} backgroundColor={segmentColor} />
      ))}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.charts.legend;

  return StyleSheet.create({
    swatch: {
      width: tokens?.swatchSize ?? theme.space.mxs,
      height: tokens?.swatchSize ?? theme.space.mxs,
      borderRadius: tokens?.swatchRadius ?? theme.radii.sm,
      flexDirection: "row",
      overflow: "hidden",
      flexShrink: 0,
    },
  });
}
