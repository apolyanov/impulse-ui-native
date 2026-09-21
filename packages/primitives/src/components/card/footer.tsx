import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardFooterProps } from "../../types";
import { View } from "../atoms/view";

export const CardFooter = memo(function CardFooter({
  style,
  ...props
}: CardFooterProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);
  const footerStyle = useMemo(
    () => [styles.footer, extractedStyleProps, style],
    [extractedStyleProps, style, styles.footer],
  );

  return <View {...props} style={footerStyle} />;
});

function themedStyles(theme: AppTheme) {
  const footerTokens = theme.components.card.footer;

  return StyleSheet.create({
    footer: {
      gap: footerTokens.gap,
      padding: footerTokens.padding,
    },
  });
}
