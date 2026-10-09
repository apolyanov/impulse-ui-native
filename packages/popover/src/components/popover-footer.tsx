import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { PopoverFooterProps } from "../types";

export const PopoverFooter = memo(function PopoverFooter({
  style,
  ...props
}: PopoverFooterProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);

  const partStyle = useMemo(
    () => [styles.part, extractedStyleProps, style],
    [styles.part, extractedStyleProps, style],
  );

  return <View {...props} style={partStyle} />;
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    part: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      gap: theme.components.popover.gap,
    },
  });
}
