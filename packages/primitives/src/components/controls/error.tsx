import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { AppTheme, useThemedStyles } from "@impulse-ui-native/theme";

import { ControlErrorLabelProps } from "../../types";
import { Typography } from "../atoms";
import { useControlContext } from "./provider";

export const ControlError = memo(function ControlError(
  props: ControlErrorLabelProps,
) {
  const { style, ...rest } = props;

  const { error } = useControlContext();

  const styles = useThemedStyles(themedStyles);

  const errorStyle = useMemo(
    () => [styles.error, style],
    [styles.error, style],
  );

  if (!Boolean(error)) {
    return null;
  }

  return (
    <Typography.Caption {...rest} style={errorStyle}>
      {error}
    </Typography.Caption>
  );
});

function themedStyles(theme: AppTheme) {
  const controlErrorTokens = theme.components.controlError;

  return StyleSheet.create({
    error: {
      marginTop: controlErrorTokens.marginTop,
      color: controlErrorTokens.color,
      fontSize: controlErrorTokens.fontSize,
    },
  });
}
