import type { AccessibilityState } from "react-native";
import { memo, PropsWithChildren, useMemo } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { Icon } from "@impulse-ui-native/icon/components/icon";
import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { IconButtonProps, IconButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";

export const IconButton = memo(function IconButton({
  accessibilityState,
  size = "medium",
  variant = "filled",
  disabled,
  loading = false,
  style,
  icon,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  const styles = useThemedStyles(themedStyles, { size, variant, disabled }, [
    size,
    variant,
    disabled,
  ]);

  const interactionDisabled = disabled === true || loading;

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      busy: loading,
      disabled: interactionDisabled,
    }),
    [accessibilityState, interactionDisabled, loading],
  );

  const iconButtonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  return (
    <Pressable
      {...props}
      accessibilityState={resolvedAccessibilityState}
      disabled={interactionDisabled}
      style={iconButtonStyles}
    >
      {loading ? (
        <ActivityIndicator color={styles.icon.color} />
      ) : (
        <Icon size={size} icon={icon} color={styles.icon.color} />
      )}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: IconButtonThemeProps) {
  const { size, variant, disabled } = props;

  const iconButtonTokens = theme.components.iconButton;
  const sizeTokens = iconButtonTokens.sizes[size];
  const variantTokens = iconButtonTokens.variants[variant];

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.size,
      width: sizeTokens.size,
      padding: sizeTokens.padding,

      borderWidth: iconButtonTokens.borderWidth,
      borderRadius: iconButtonTokens.borderRadius,

      borderColor: disabled
        ? variantTokens.disabledBorderColor
        : variantTokens.borderColor,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
    },

    icon: {
      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },
  });
}
