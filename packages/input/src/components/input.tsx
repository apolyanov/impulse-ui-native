import { Icon } from "@impulse-ui-native/icon";
import {
  AppTheme,
  ComponentSize,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { memo, useMemo } from "react";
import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { InputProps, InputVariant } from "../types";

export const Input = memo(function Input({
  size = "medium",
  variant = "outlined",
  label,
  error,
  disabled,
  style,
  prefixIcon,
  suffixIcon,
  ...props
}: InputProps) {
  const theme = useTheme();

  const styles = useThemedStyles(themedStyles, {
    size,
    variant,
    disabled,
    error,
  });

  const labelColor = useMemo(() => {
    if (disabled) return theme.colors.neutral[7];
    if (error) return theme.colors.error;
    return theme.colors.text.secondary;
  }, [disabled, error, theme.colors]);

  const labelStyle = useMemo(
    () => [styles.label, { color: labelColor }],
    [styles.label, labelColor]
  );

  const inputContainerStyle = useMemo(
    () => [styles.inputContainer, style],
    [styles.inputContainer, style]
  );

  const inputStyle = useMemo(() => [styles.input], [styles.input]);

  const iconColor = useMemo(() => {
    if (disabled) return theme.colors.neutral[7];
    if (error) return theme.colors.error;
    return theme.colors.text.secondary;
  }, [disabled, error, theme.colors]);

  return (
    <View style={styles.container}>
      {label && <Typography.Label style={labelStyle}>{label}</Typography.Label>}

      <View style={inputContainerStyle}>
        {prefixIcon ? (
          <Icon icon={prefixIcon} color={iconColor} style={styles.icon} />
        ) : null}

        <TextInput
          style={inputStyle}
          placeholderTextColor={theme.colors.neutral[7]}
          editable={!disabled}
          {...props}
        />

        {suffixIcon ? (
          <Icon icon={suffixIcon} color={iconColor} style={styles.icon} />
        ) : null}
      </View>

      {Boolean(error) ? (
        <Typography.Caption style={styles.error}>{error}</Typography.Caption>
      ) : null}
    </View>
  );
});

const themedStyles = (
  theme: AppTheme,
  {
    size,
    variant,
    disabled,
    error,
  }: {
    size: ComponentSize;
    variant: InputVariant;
    disabled?: boolean;
    error?: string;
  }
) => {
  const height: ViewStyle = {
    small: { height: 36 },
    medium: { height: 44 },
    large: { height: 52 },
  }[size];

  const fontSize: TextStyle = {
    small: { fontSize: 14 },
    medium: { fontSize: 16 },
    large: { fontSize: 18 },
  }[size];

  const baseInput: ViewStyle = {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
  };

  const baseContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.radii.sm,
    borderWidth: theme.borderSize.sm,
    opacity: disabled ? 0.7 : 1,
    ...height,
    paddingHorizontal: 8,
  };

  const variants: Record<InputVariant, ViewStyle> = {
    filled: {
      backgroundColor: disabled
        ? theme.colors.neutral[2]
        : theme.colors.background.secondary,
      borderColor: "transparent",
    },
    outlined: {
      backgroundColor: theme.colors.background.primary,
      borderColor: error ? theme.colors.error : theme.colors.neutral[5],
    },
    standard: {
      borderBottomWidth: theme.borderSize.sm,
      borderColor: error ? theme.colors.error : theme.colors.neutral[6],
      backgroundColor: "transparent",
    },
  };

  return StyleSheet.create({
    container: {
      width: "100%",
    },
    label: {
      marginBottom: 4,
      fontSize: 14,
      color: theme.colors.text.secondary,
    },
    inputContainer: {
      ...baseContainer,
      ...variants[variant],
    },
    input: {
      ...baseInput,
      ...fontSize,
    },
    icon: {
      marginHorizontal: 4, // ✅ only layout, no color
    },
    error: {
      marginTop: 4,
      color: theme.colors.error,
      fontSize: 12,
    },
  });
};
