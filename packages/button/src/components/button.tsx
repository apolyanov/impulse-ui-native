import { useEventCallback } from "@impulse-ui-native/core";
import {
  AppTheme,
  ComponentSize,
  useColors,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { memo, PropsWithChildren, useMemo } from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

import { ButtonProps, ButtonVariant } from "../types";

export const Button = memo(function Button({
  size = "medium",
  variant = "contained",
  disabled,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const colors = useColors();

  const styles = useThemedStyles(themedStyles, { size, variant, disabled });
  const extractedStyleProps = useStyleProps(props);

  const pressableStyles = useEventCallback(
    (state: PressableStateCallbackType) =>
      StyleSheet.flatten([
        styles.button,
        extractedStyleProps,
        style,
        state.pressed ? styles.pressed : undefined,
      ])
  );

  const androidRipple = useMemo(
    () => ({
      color: variant === "contained" ? colors.neutral[8] : colors.neutral[3],
    }),
    [variant, colors]
  );

  const content = useMemo(() => {
    return typeof children === "string" ? (
      <Typography.Master style={styles.text}>{children}</Typography.Master>
    ) : (
      children
    );
  }, [children]);

  return (
    <Pressable
      style={pressableStyles}
      disabled={disabled}
      android_ripple={androidRipple}
      {...props}
    >
      {content}
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
    size: ComponentSize;
    variant: ButtonVariant;
    disabled?: boolean;
  }
) => {
  const padding: ViewStyle = {
    small: { paddingVertical: 6, paddingHorizontal: 12 },
    medium: { paddingVertical: 8, paddingHorizontal: 16 },
    large: { paddingVertical: 10, paddingHorizontal: 20 },
  }[size];

  const fontSize: TextStyle = {
    small: { fontSize: 14 },
    medium: { fontSize: 16 },
    large: { fontSize: 16 },
  }[size];

  const height: ViewStyle = {
    small: { height: 32 },
    medium: { height: 40 },
    large: { height: 48 },
  }[size];

  const baseButton: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.md,
    opacity: disabled ? 0.7 : 1,
  };

  const baseText: TextStyle = {
    width: "100%",
    textAlign: "center",
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
      ...padding,
      ...fontSize,
      ...height,
      ...variantStyles.view,
    },
    text: {
      ...baseText,
      ...variantStyles.text,
    },
    pressed: {
      opacity: 0.7,
    },
  });
};
