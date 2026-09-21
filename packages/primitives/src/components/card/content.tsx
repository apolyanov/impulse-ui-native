import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardContentProps } from "../../types";
import { View } from "../atoms/view";

export const CardContent = memo(function CardContent({
  style,
  ...props
}: CardContentProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const contentStyle = useMemo(
    () => [styles.content, extractedStyleProps, style],
    [extractedStyleProps, style, styles.content],
  );

  return <View {...props} style={contentStyle} />;
});

function themedStyles(theme: AppTheme) {
  const contentTokens = theme.components.card.content;

  return StyleSheet.create({
    content: {
      gap: contentTokens.gap,
      padding: contentTokens.padding,
    },
  });
}
