import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { FlyoutHeaderProps } from "../types";

export const FlyoutHeader = memo(function FlyoutHeader({
  style,
  ...props
}: FlyoutHeaderProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);

  const headerStyle = useMemo(
    () => [styles.header, extractedStyleProps, style],
    [styles.header, extractedStyleProps, style],
  );

  return <View {...props} style={headerStyle} />;
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.flyout.title;

  return StyleSheet.create({
    header: {
      paddingVertical: tokens.paddingVertical,
      paddingHorizontal: tokens.paddingHorizontal,
      alignItems: "center",
    },
  });
}
