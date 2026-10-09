import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlErrorLabelProps } from "../../types";
import { Typography } from "../atoms";

export const ControlError = memo(function ControlError(
  props: ControlErrorLabelProps,
) {
  const { children, style, ...rest } = props;

  const styles = useThemedStyles(themedStyles);

  const errorStyle = useMemo(
    () => [styles.error, style],
    [styles.error, style],
  );

  return (
    <Typography.Caption {...rest} style={errorStyle}>
      {children}
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
