import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  ComponentSize,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlValueProps } from "../../types";
import { Typography } from "../atoms";
import { useControlContext } from "./provider";

export const ControlValue = memo(function ControlValue(
  props: ControlValueProps,
) {
  const { style, ...rest } = props;

  const { size } = useControlContext();

  const styles = useThemedStyles(themedStyles, { size }, [size]);

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
  }: {
    size: ComponentSize;
  },
) {
  const controlInputTokens = theme.components.controlInput;
  const sizeTokens = controlInputTokens.sizes[size];

  return StyleSheet.create({
    value: {
      flex: controlInputTokens.flex,
      fontFamily: controlInputTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      paddingHorizontal: controlInputTokens.paddingHorizontal,
    },
  });
}
