import { EyeIcon, EyeSlashIcon, Icon } from "@impulse-ui-native/icon";
import {
  AppTheme,
  ComponentSize,
  useTheme,
  useThemedStyles,
} from "@impulse-ui-native/theme";
import { Typography } from "@impulse-ui-native/typography";
import { Pressable } from "@impulse-ui-native/button";
import { memo, useMemo, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { InputProps, InputVariant } from "../types";
import { useEventCallback } from "@impulse-ui-native/core";

export const Input = memo(function Input({
  size = "medium",
  variant = "outlined",
  label,
  error,
  disabled,
  style,
  prefixIcon: PrefixIcon,
  suffixIcon,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const theme = useTheme();

  const styles = useThemedStyles(themedStyles, {
    size,
    variant,
    disabled,
    error,
  });

  const togglePasswordVisibility = useEventCallback(() => {
    setShowPassword(prevState => !prevState);
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

  const SuffixIcon = useMemo(() => {
    if (props.secureTextEntry) {
      return showPassword ? EyeIcon : EyeSlashIcon;
    }

    return suffixIcon;
  }, [props.secureTextEntry, suffixIcon, showPassword]);

  const onSuffixIconPress = useMemo(() => {
    if (props.secureTextEntry) {
      return togglePasswordVisibility;
    }

    return props.onSuffixIconPress;
  }, [props.secureTextEntry]);

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
        {PrefixIcon ? (
          <Pressable hitSlop={16} onPress={props.onPrefixIconPress}>
            <Icon icon={PrefixIcon} color={iconColor} style={styles.icon} />
          </Pressable>
        ) : null}

        <TextInput
          style={inputStyle}
          placeholderTextColor={theme.colors.neutral[7]}
          editable={!disabled}
          {...props}
          secureTextEntry={props.secureTextEntry && !showPassword}
        />

        {SuffixIcon ? (
          <Pressable hitSlop={16} onPress={onSuffixIconPress}>
            <Icon icon={SuffixIcon} color={iconColor} style={styles.icon} />
          </Pressable>
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
    height: "100%",
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
      marginLeft: 4,
      ...baseInput,
      ...fontSize,
    },
    icon: {
      marginHorizontal: 4,
    },
    error: {
      marginTop: 4,
      color: theme.colors.error,
      fontSize: 12,
    },
  });
};
