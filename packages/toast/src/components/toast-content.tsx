import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ToastContentProps } from "../types";
import { useToastContext } from "../hooks/use-toast-context.hook";

export const ToastContent = memo(function ToastContent({
  style,
  ...props
}: ToastContentProps) {
  useToastContext();

  const styles = useThemedStyles(themedStyles);

  const contentStyle = useMemo(
    () => [styles.content, style],
    [styles.content, style],
  );

  return <View {...props} style={contentStyle} />;
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    content: { flex: 1, minWidth: 0, gap: theme.components.toast.contentGap },
  });
}
