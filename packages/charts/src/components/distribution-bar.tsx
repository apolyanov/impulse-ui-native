import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useTheme, useThemedStyles } from "@impulse-ui-native/theme";

import type { DistributionBarProps } from "../types/distribution-bar.types";
import { getChartColor } from "../utils/chart-color.util";
import { getDistributionBarSegments } from "../utils/distribution-bar.util";

export const DistributionBar = memo(function DistributionBar({
  data,
  radius,
  style,
  ...props
}: DistributionBarProps) {
  const theme = useTheme();
  const styles = useThemedStyles(themedStyles);
  const segments = useMemo(() => getDistributionBarSegments(data), [data]);
  const containerStyle = useMemo(
    () => [
      styles.container,
      radius === undefined ? undefined : { borderRadius: radius },
      style,
    ],
    [styles.container, radius, style],
  );

  return (
    <View {...props} style={containerStyle}>
      {segments.map((item) => {
        const backgroundColor =
          item.color ?? getChartColor(item.id, theme.components.charts.palette);
        const segmentStyle = {
          flexBasis: 0,
          flexGrow: item.fraction,
          backgroundColor,
        };

        return <View key={item.id} style={segmentStyle} />;
      })}
    </View>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.charts.distribution;

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      overflow: "hidden",
      height: tokens?.height ?? theme.space.md,
      borderRadius: tokens?.radius ?? theme.radii.sm,
      backgroundColor:
        tokens?.backgroundColor ?? theme.colors.surface.subtle.value,
    },
  });
}
