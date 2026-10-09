import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ToastIconProps } from "../types";
import type { ToastIconThemeProps } from "../types/toast-theme.types";
import { useToastContext } from "../hooks/use-toast-context.hook";

export const ToastIcon = memo(function ToastIcon({
  children,
  style,
  ...props
}: ToastIconProps) {
  const { tone } = useToastContext();

  const styles = useThemedStyles(themedStyles, { tone }, [tone]);

  const iconStyle = useMemo(() => [styles.icon, style], [styles.icon, style]);

  return (
    <View {...props} style={iconStyle}>
      {children}
    </View>
  );
});

function themedStyles(theme: AppTheme, { tone }: ToastIconThemeProps) {
  const tokens = theme.components.toast;

  return StyleSheet.create({
    icon: {
      width: tokens.iconContainerSize,
      height: tokens.iconContainerSize,
      borderRadius: theme.radii.round,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: tokens.tones[tone].contrast,
    },
  });
}
