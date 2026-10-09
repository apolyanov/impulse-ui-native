import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { ModalSurfaceProps } from "../types";
import type { ModalSurfaceThemeProps } from "../types/modal-theme.types";

export const ModalSurface = memo(function ModalSurface({
  size = "medium",
  style,
  ...props
}: ModalSurfaceProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(themedStyles, { size }, [size]);

  const rootStyle = useMemo(
    () => [styles.root, extractedStyleProps, style],
    [styles.root, extractedStyleProps, style],
  );

  return <View {...props} style={rootStyle} />;
});

function themedStyles(theme: AppTheme, { size }: ModalSurfaceThemeProps) {
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
