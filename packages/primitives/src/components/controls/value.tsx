import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  ComponentSize,
  FieldVariant,
  getFieldStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlValueProps } from "../../types";
import { Typography } from "../atoms";
import { useControlContext } from "./provider";

export const ControlValue = memo(function ControlValue(
  props: ControlValueProps,
) {
  const { style, ...rest } = props;

  const { size, variant, disabled, error } = useControlContext();

  const styles = useThemedStyles(
    themedStyles,
    { size, variant, disabled, error },
    [size, variant, disabled, error],
  );

  const valueStyle = useMemo(
    () => [styles.value, style],
    [styles.value, style],
  );

  return <Typography.Master numberOfLines={1} {...rest} style={valueStyle} />;
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
  const appearanceTokens = getFieldStateTokens(
    controlInputTokens.variants[variant],
    { disabled, error: Boolean(error) },
  );

  return StyleSheet.create({
    value: {
      flex: controlInputTokens.flex,
      color: appearanceTokens.color,
      fontFamily: controlInputTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      paddingHorizontal: controlInputTokens.paddingHorizontal,
    },
  });
}
