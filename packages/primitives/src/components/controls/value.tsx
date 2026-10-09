import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFieldStateTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlValueProps } from "../../types";
import type { ControlFieldThemeProps } from "../../types/control-theme.types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { Typography } from "../atoms";

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
  { size, variant, disabled, error }: ControlFieldThemeProps,
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
