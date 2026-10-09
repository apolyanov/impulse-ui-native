import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme, ComponentSize } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ModalRootProps } from "../types";

export const ModalRoot = memo(function ModalRoot({
  size = "medium",
  style,
  ...props
}: ModalRootProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, { size }, [size]);

  const rootStyle = useMemo(
    () => [styles.root, extractedStyleProps, style],
    [styles.root, extractedStyleProps, style],
  );

  return <View {...props} style={rootStyle} />;
});

function themedStyles(theme: AppTheme, { size }: { size: ComponentSize }) {
  const tokens = theme.components.modal;

  return StyleSheet.create({
    root: {
      width: "100%",
      maxWidth: tokens.sizes[size].maxWidth,
      padding: tokens.padding,
      gap: tokens.gap,
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      borderWidth: tokens.borderWidth,
      borderRadius: tokens.borderRadius,
    },
  });
}
