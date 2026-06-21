import { memo, useMemo } from "react";
import { StyleSheet, TextInput } from "react-native";

import {
  AppTheme,
  ComponentSize,
  ComponentVariant,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlInputProps } from "../../types";
import { useControlContext } from "./provider";

export const ControlInput = memo(function ControlInput(
  props: ControlInputProps,
) {
  const { onPress, style, ...rest } = props;

  const { size, variant, disabled, error } = useControlContext();

  const styles = useThemedStyles(
    themedStyles,
    {
      size,
      variant,
      disabled,
      error,
    },
    [size, variant, disabled, error],
  );

  const inputStyles = useMemo(
    () => [styles.input, style],
    [styles.input, style],
  );

  return (
    <TextInput
      {...rest}
      style={inputStyles}
      placeholderTextColor={styles.placeholder.color}
      editable={!disabled}
    />
  );
});

function themedStyles(
  theme: AppTheme,
  {
    size,
    variant,
    disabled,
    error,
  }: {
    size: ComponentSize;
    variant: ComponentVariant;
    disabled?: boolean;
    error?: string;
  },
) {
  const controlInputTokens = theme.components.controlInput;
  const sizeTokens = controlInputTokens.sizes[size];
  const variantTokens = controlInputTokens.variants[variant];

  const color = disabled
    ? variantTokens.disabledColor
    : error
      ? variantTokens.errorColor
      : variantTokens.color;

  const placeholderColor = disabled
    ? variantTokens.disabledPlaceholderColor
    : error
      ? variantTokens.errorPlaceholderColor
      : variantTokens.placeholderColor;

  return StyleSheet.create({
    input: {
      flex: controlInputTokens.flex,
      color,
      fontSize: sizeTokens.fontSize,
      fontFamily: controlInputTokens.fontFamily,
      paddingHorizontal: controlInputTokens.paddingHorizontal,
      height: "100%",
    },

    placeholder: {
      color: placeholderColor,
    },
  });
}
