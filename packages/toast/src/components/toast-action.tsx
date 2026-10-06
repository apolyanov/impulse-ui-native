import type { GestureResponderEvent } from "react-native";
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";
import { Pressable, Typography } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ToastActionProps } from "../types";
import { useToastContext } from "../hooks/use-toast-context.hook";

export const ToastAction = memo(function ToastAction({
  children,
  closeOnPress = true,
  onPress,
  disabled,
  loading,
  style,
  ...props
}: ToastActionProps) {
  const { interactive, close } = useToastContext();

  const blocked = disabled === true || loading === true || !interactive;

  const styles = useThemedStyles(themedStyles, { blocked }, [blocked]);

  const actionStyle = useMemo(
    () => [styles.action, style],
    [styles.action, style],
  );

  const handlePress = useEventCallback((event: GestureResponderEvent) => {
    if (blocked) {
      return;
    }

    onPress?.(event);

    if (closeOnPress) {
      close();
    }
  });

  return (
    <Pressable
      hitSlop={styles.action.paddingHorizontal}
      {...props}
      disabled={blocked}
      onPress={handlePress}
      style={actionStyle}
    >
      {typeof children === "string" ? (
        <Typography.Label style={styles.label}>{children}</Typography.Label>
      ) : (
        children
      )}
    </Pressable>
  );
});

function themedStyles(
  theme: AppTheme,
  { blocked }: { blocked: boolean | undefined },
) {
  const tokens = theme.components.toast;

  return StyleSheet.create({
    action: {
      minHeight: tokens.actionMinSize,
      minWidth: tokens.actionMinSize,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: tokens.gap,
    },
    label: {
      color: blocked ? tokens.disabledColor : tokens.actionColor,
      fontWeight: "600",
    },
  });
}
