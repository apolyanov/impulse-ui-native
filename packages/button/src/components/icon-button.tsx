import { useEventCallback } from "@impulse-ui-native/core";
import { Icon } from "@impulse-ui-native/icon";
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
  ViewStyle,
} from "react-native";
import { ButtonVariant, IconButtonProps } from "../types";

export const IconButton = memo(function IconButton({
  size = "medium",
  variant = "contained",
  disabled,
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
    [variant, theme.colors.neutral]
  );

  const iconColor = useMemo(() => {
    const primary = theme.colors.primary;
    const neutral = theme.colors.neutral;
    const white = theme.colors.white;

    switch (variant) {
      case "contained":
        return disabled ? neutral[5] : white;
      case "outlined":
      case "text":
      default:
        return disabled ? neutral[6] : primary;
    }
  }, [variant, disabled, theme]);

  return (
    <Pressable
      style={pressableStyles}
      disabled={disabled}
      android_ripple={androidRipple}
      {...props}
    >
      <Icon size={size} icon={icon} color={iconColor} />
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

  const variants: Record<ButtonVariant, ViewStyle> = {
    contained: {
      backgroundColor: disabled ? neutral[5] : primary,
    },
    outlined: {
      borderWidth: theme.borderSize.sm,
      borderColor: disabled ? neutral[6] : primary,
      backgroundColor: "transparent",
    },
    text: {
      borderWidth: theme.borderSize.sm,
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
  };

  const variantStyles = variants[variant];

  return StyleSheet.create({
    button: {
      ...baseButton,
      ...padding,
      ...height,
      ...variantStyles,
    },
    pressed: {
      opacity: 0.7,
    },
  });
};
