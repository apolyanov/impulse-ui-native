import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardHeaderProps } from "../../types";
import { View } from "../atoms/view";

export const CardHeader = memo(function CardHeader({
  style,
  ...props
}: CardHeaderProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const headerStyle = useMemo(
    () => [styles.header, extractedStyleProps, style],
    [extractedStyleProps, style, styles.header],
  );

  return <View {...props} style={headerStyle} />;
});

function themedStyles(theme: AppTheme) {
  const headerTokens = theme.components.card.header;

  return StyleSheet.create({
    header: {
      gap: headerTokens.gap,
      padding: headerTokens.padding,
    },
  });
}
