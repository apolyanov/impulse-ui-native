import { AppTheme, useTheme } from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { memo, PropsWithChildren, useMemo } from "react";
import { Pressable, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonProps, ButtonVariant } from "../types";

export const Button = memo(function Button({
  size = "medium",
  variant = "contained",
  disabled,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const theme = useTheme();
  const styles = useMemo(
    () => themedStyles(theme, { size, variant, disabled }),
    [size, variant, disabled]
  );

  return (
    <Pressable
      style={[styles.button, style]}
      disabled={disabled}
      android_ripple={{
        color:
          variant === "contained"
            ? theme.colors.neutral[8]
            : theme.colors.neutral[3],
      }}
      {...props}
    >
      {typeof children === "string" ? (
        <Typography.Body style={styles.text}>{children}</Typography.Body>
      ) : (
        children
      )}
    </Pressable>
  );
});

const themedStyles = (
  theme: AppTheme,
  {
    size,
    variant,
    disabled,
  }: {
    size: "small" | "medium" | "large";
    variant: "contained" | "outlined" | "text";
    disabled?: boolean;
  }
) => {
  const sizes = {
    small: { paddingVertical: 6, paddingHorizontal: 12, fontSize: 14 },
    medium: { paddingVertical: 8, paddingHorizontal: 16, fontSize: 16 },
    large: { paddingVertical: 10, paddingHorizontal: 20, fontSize: 18 },
  }[size];

  const baseButton: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.md,
    opacity: disabled ? 0.7 : 1,
  };

  const primary = theme.colors.primary;
  const neutral = theme.colors.neutral;

  const variants: Record<ButtonVariant, { view: ViewStyle; text: TextStyle }> =
    {
      contained: {
        view: { backgroundColor: disabled ? neutral[5] : primary },
        text: { color: theme.colors.white },
      },
      outlined: {
        view: {
          borderWidth: theme.borderSize.sm,
          borderColor: disabled ? neutral[6] : primary,
          backgroundColor: "transparent",
        },
        text: { color: disabled ? neutral[6] : primary },
      },
      text: {
        view: {
          borderWidth: theme.borderSize.sm,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
        text: { color: disabled ? neutral[6] : primary },
      },
    };

  const variantStyles = variants[variant];

  return StyleSheet.create({
    button: {
      ...baseButton,
      ...sizes,
      ...variantStyles.view,
    },
    text: {
      ...variantStyles.text,
    },
  });
};
