import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { memo, useEventCallback } from "@impulse-ui-native/core";
import { Pressable } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ChartLegendItem } from "../types";
import { ChartRow } from "./chart-row";
import { ChartSwatch } from "./chart-swatch";
import { ChartText } from "./chart-text";

interface ChartLegendEntryProps {
  item: ChartLegendItem;
  hidden: boolean;
  onToggle?: (id: string) => void;
}

export const ChartLegendEntry = memo(function ChartLegendEntry({
  item,
  hidden,
  onToggle,
}: ChartLegendEntryProps) {
  const styles = useThemedStyles(themedStyles);
  const style = useMemo(
    () => [styles.entry, !onToggle ? styles.readOnly : null],
    [styles, onToggle],
  );
  const handlePress = useEventCallback(() => onToggle?.(item.id));

  return (
    <Pressable onPress={handlePress} disabled={!onToggle} style={style}>
      <ChartRow flexShrink={1} style={hidden ? styles.hidden : undefined}>
        <ChartSwatch color={item.color} colors={item.colors} />
        <ChartText flexShrink={1}>{item.label}</ChartText>
      </ChartRow>
    </Pressable>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.charts.legend;

  return StyleSheet.create({
    entry: {
      maxWidth: "100%",
      padding: tokens?.padding ?? theme.space.xs,
    },
    hidden: { opacity: theme.components.pressable.disabledOpacity },
    readOnly: { opacity: 1 },
  });
}
