import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ListTrailingProps } from "../../types";
import { View } from "../atoms/view";

export const ListTrailing = memo(function ListTrailing({
  style,
  ...props
}: ListTrailingProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const composedStyle = useMemo(
    () => [styles.part, extractedStyleProps, style],
    [styles.part, extractedStyleProps, style],
  );
  return <View {...props} style={composedStyle} />;
});
function themedStyles(theme: AppTheme) {
  const tokens = theme.components.list;
  return StyleSheet.create({
    part: {
      flexShrink: 0,
      flexDirection: "row",
      alignItems: "center",
      gap: tokens.item.gap,
    },
  });
}
