import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFieldStateTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlLabelProps } from "../../types";
import type { ControlStateThemeProps } from "../../types/control-theme.types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { Typography } from "../atoms";

export const ControlLabel = memo(function ControlLabel(
  props: ControlLabelProps,
) {
  const { children, disabled, style, ...rest } = props;

  const { error } = useControlContext();

  const styles = useThemedStyles(
    themedStyles,
    {
      disabled,
      error,
    },
    [disabled, error],
  );

  const labelStyle = useMemo(
    () => [styles.label, style],
    [styles.label, style],
  );

  if (!children) {
    return null;
  }

  return (
    <Typography.Label {...rest} style={labelStyle}>
      {children}
    </Typography.Label>
  );
});

function themedStyles(theme: AppTheme, props: ControlStateThemeProps) {
  const { disabled, error } = props;

  const controlLabelTokens = theme.components.controlLabel;
  const appearanceTokens = getFieldStateTokens(controlLabelTokens.states, {
    disabled,
    error: Boolean(error),
  });

  return StyleSheet.create({
    label: {
      marginBottom: controlLabelTokens.marginBottom,
      fontSize: controlLabelTokens.fontSize,
      color: appearanceTokens.color,
    },
  });
}
