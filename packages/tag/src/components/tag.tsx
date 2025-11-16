import { Icon, IconStyle } from "@impulse-ui-native/icon";
import {
  AppTheme,
  ComponentSize,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { memo, useMemo } from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { TagProps } from "../types";

import { CloseIcon } from "./close.icon";

export const Tag = memo(function Tag({
  label,
  size = "medium",
  variant = "filled",
  color = "primary",
  closable,
  disabled,
  onClose,
  style,
  onPress,
}: TagProps) {
  const theme = useTheme();

  const styles = useThemedStyles(themedStyles, {
    size,
    variant,
    color,
    disabled,
  });

  const textColor = useMemo(() => {
    if (variant === "filled") return theme.colors.white;

    return disabled ? theme.colors.neutral[7] : theme.colors[color];
  }, [variant, disabled, theme.colors, color]);

  const labelStyle = useMemo(
    () => [styles.label, { color: textColor }],
    [styles.label, textColor]
  );

  const containerStyle = useMemo(() => {
    if (onPress) {
      return (state: PressableStateCallbackType) => [
        styles.container,
        style,
        state.pressed ? styles.pressed : undefined,
      ];
    }

    return [styles.container, style];
  }, [styles.container, style]);

  const Container = useMemo(() => {
    if (onPress) {
      return Pressable;
    }

    return View;
  }, []);

  const showClose =
    (closable || size === "medium" || size === "large") && !disabled && onClose;

  return (
    <Container onPress={onPress} style={containerStyle}>
      <Typography.Caption style={labelStyle}>{label}</Typography.Caption>
      {showClose ? (
        <Pressable onPress={onClose} hitSlop={6}>
          <Icon
            icon={CloseIcon}
            size="small"
            color={textColor}
            style={styles.icon}
          />
        </Pressable>
      ) : null}
    </Container>
  );
});

const themedStyles = (
  theme: AppTheme,
  {
    size,
    variant,
    color,
    disabled,
  }: {
    size: ComponentSize;
    variant: "filled" | "outlined";
    color: "primary" | "secondary";
    disabled?: boolean;
  }
) => {
  const height: ViewStyle = {
    small: { height: 24, paddingHorizontal: 8 },
    medium: { height: 28, paddingHorizontal: 10 },
    large: { height: 32, paddingHorizontal: 12 },
  }[size];

  const fontSize: TextStyle = {
    small: { fontSize: 12 },
    medium: { fontSize: 14 },
    large: { fontSize: 14 },
  }[size];

  const baseContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: theme.radii.round,
    opacity: disabled ? 0.6 : 1,
    gap: 6,
    ...height,
  };

  const variants: Record<"filled" | "outlined", ViewStyle> = {
    filled: {
      backgroundColor: disabled
        ? theme.colors.neutral[4]
        : theme.colors[color] || theme.colors.primary,
    },
    outlined: {
      borderWidth: theme.borderSize.sm,
      borderColor: disabled
        ? theme.colors.neutral[6]
        : theme.colors[color] || theme.colors.primary,
      backgroundColor: "transparent",
    },
  };

  const iconStyle: IconStyle = {
    marginLeft: 2,
  };

  return StyleSheet.create({
    container: {
      ...baseContainer,
      ...variants[variant],
    },
    label: {
      ...fontSize,
      color: theme.colors.text.primary,
    },
    icon: iconStyle,
    pressed: {
      opacity: 0.7,
    },
  });
};
