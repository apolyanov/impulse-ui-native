import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardRootProps } from "../types";

export const CardRoot = memo(function CardRoot({
  style,
  ...props
}: CardRootProps) {
  const styles = useThemedStyles(themedStyles);
  const extractedStyleProps = useStyleProps(props);

  const rootStyle = useMemo(
    () => [styles.root, extractedStyleProps, style],
    [extractedStyleProps, style, styles.root],
  );

  return <View {...props} style={rootStyle} />;
});

export function themedStyles(theme: AppTheme) {
  const tokens = theme.components.card;

  return StyleSheet.create({
    root: {
      overflow: "hidden",
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
    },
  });
}
