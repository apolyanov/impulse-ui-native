import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ListRootProps } from "../types";

export const ListRoot = memo(function ListRoot({
  style,
  ...props
}: ListRootProps) {
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
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      borderWidth: tokens.borderWidth,
      borderRadius: tokens.borderRadius,
      overflow: "hidden",
    },
  });
}
