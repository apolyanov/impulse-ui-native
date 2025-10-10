import { useEventCallback } from "@impulse-ui-native/core";
import { Icon, IconStyle } from "@impulse-ui-native/icon";
import {
  AppTheme,
  ComponentSize,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";
import { memo, PropsWithChildren, useMemo } from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { ButtonVariant, IconButtonProps } from "../types";

export const IconButton = memo(function IconButton({
  size = "medium",
  variant = "contained",
  disabled,
  children,
  style,
  icon,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  const theme = useTheme();

  const styles = useThemedStyles(themedStyles, { size, variant, disabled });

  const pressableStyles = useEventCallback(
    (state: PressableStateCallbackType) => [
      styles.button,
      style,
      state.pressed ? styles.pressed : undefined,
    ]
  );

  const androidRipple = useMemo(
    () => ({
      color:
        variant === "contained"
          ? theme.colors.neutral[8]
          : theme.colors.neutral[3],
    }),
    [variant]
  );

  return (
    <Pressable
      style={pressableStyles}
      disabled={disabled}
      android_ripple={androidRipple}
      {...props}
    >
      <Icon
        color={styles.icon.color}
        style={styles.icon}
        size={size}
        icon={icon}
      />
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
    small: { padding: 6 },
    medium: { padding: 8 },
    large: { padding: 10 },
  }[size];

  const fontSize: TextStyle = {
    small: { fontSize: 14 },
    medium: { fontSize: 16 },
    large: { fontSize: 16 },
  }[size];

  const height: ViewStyle = {
    small: { height: 32, width: 32 },
    medium: { height: 40, width: 40 },
    large: { height: 48, width: 48 },
  }[size];

  const baseButton: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.md,
    opacity: disabled ? 0.7 : 1,
  };

  const primary = theme.colors.primary;
  const neutral = theme.colors.neutral;

  const variants: Record<ButtonVariant, { view: ViewStyle; icon: IconStyle }> =
    {
      contained: {
        view: { backgroundColor: disabled ? neutral[5] : primary },
        icon: { color: theme.colors.white },
      },
      outlined: {
        view: {
          borderWidth: theme.borderSize.sm,
          borderColor: disabled ? neutral[6] : primary,
          backgroundColor: "transparent",
        },
        icon: { color: disabled ? neutral[6] : primary },
      },
      text: {
        view: {
          borderWidth: theme.borderSize.sm,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
        icon: { color: disabled ? neutral[6] : primary },
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
    pressed: {
      opacity: 0.7,
    },
    icon: variantStyles.icon,
  });
};
