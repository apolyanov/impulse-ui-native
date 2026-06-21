import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { ControlLabelProps } from "../../types";
import { Typography } from "../atoms";
import { useControlContext } from "./provider";

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

function themedStyles(
  theme: AppTheme,
  props: {
    disabled?: boolean;
    error?: string;
  },
) {
  const { disabled, error } = props;

  const controlLabelTokens = theme.components.controlLabel;

  const color = disabled
    ? controlLabelTokens.disabledColor
    : error
      ? controlLabelTokens.errorColor
      : controlLabelTokens.color;

  return StyleSheet.create({
    label: {
      marginBottom: controlLabelTokens.marginBottom,
      fontSize: controlLabelTokens.fontSize,
      color,
    },
  });
}
