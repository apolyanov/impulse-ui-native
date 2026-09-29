import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  ComponentSize,
  FieldVariant,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlPlaceholderProps } from "../../types";
import { Typography } from "../atoms";
import { useControlContext } from "./provider";

export const ControlPlaceholder = memo(function ControlPlaceholder(
  props: ControlPlaceholderProps,
) {
  const { style, ...rest } = props;

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

  const placeholderStyle = useMemo(
    () => [styles.placeholder, style],
    [styles.placeholder, style],
  );

  return (
    <Typography.Master numberOfLines={1} {...rest} style={placeholderStyle} />
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
    variant: FieldVariant;
    disabled?: boolean;
    error?: string;
  },
) {
  const controlInputTokens = theme.components.controlInput;
  const sizeTokens = controlInputTokens.sizes[size];
  const variantTokens = controlInputTokens.variants[variant];

  const color = disabled
    ? variantTokens.disabledPlaceholderColor
    : error
      ? variantTokens.errorPlaceholderColor
      : variantTokens.placeholderColor;

  return StyleSheet.create({
    placeholder: {
      flex: controlInputTokens.flex,
      color,
      fontFamily: controlInputTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      paddingHorizontal: controlInputTokens.paddingHorizontal,
    },
  });
}
