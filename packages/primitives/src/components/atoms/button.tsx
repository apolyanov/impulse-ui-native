import type { AccessibilityState } from "react-native";
import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { ButtonProps, ButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Spinner } from "./spinner";
import { Typography } from "./typography";

export const Button = memo(function Button({
  accessibilityState,
  size = "medium",
  variant = "filled",
  disabled,
  loading = false,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
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

  const buttonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  const content = useMemo(() => {
    if (loading) {
      return (
        <Spinner accessible={false} color={styles.text.color} size={size} />
      );
    }

    return typeof children === "string" ? (
      <Typography.Master style={styles.text}>{children}</Typography.Master>
    ) : (
      children
    );
  }, [children, loading, size, styles.text]);

  return (
    <Pressable
      {...props}
      accessibilityState={resolvedAccessibilityState}
      disabled={interactionDisabled}
      style={buttonStyles}
    >
      {content}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: ButtonThemeProps) {
  const { size, variant, disabled } = props;

  const buttonTokens = theme.components.button;
  const sizeTokens = buttonTokens.sizes[size];
  const variantTokens = buttonTokens.variants[variant];

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.height,
      paddingVertical: sizeTokens.paddingVertical,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderWidth: buttonTokens.borderWidth,
      borderRadius: buttonTokens.borderRadius,

      borderColor: disabled
        ? variantTokens.disabledBorderColor
        : variantTokens.borderColor,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,
    },

    text: {
      width: "100%",
      textAlign: "center",

      fontSize: sizeTokens.fontSize,

      color: disabled ? variantTokens.disabledColor : variantTokens.color,
    },
  });
}
