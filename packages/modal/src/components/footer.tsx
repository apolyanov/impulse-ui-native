import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ModalFooterProps } from "../types";

export const ModalFooter = memo(function ModalFooter({
  style,
  ...props
}: ModalFooterProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles);

  const partStyle = useMemo(
    () => [styles.part, extractedStyleProps, style],
    [styles.part, extractedStyleProps, style],
  );

  return <View {...props} style={partStyle} />;
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.modal;

  return StyleSheet.create({
    part: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      gap: tokens.footerGap,
    },
  });
}
