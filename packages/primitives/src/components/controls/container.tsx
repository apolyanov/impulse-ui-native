import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFieldStateTokens, useThemedStyles } from "@impulse-ui-native/theme";

import type { ControlContainerProps } from "../../types";
import type { ControlFieldThemeProps } from "../../types/control-theme.types";
import { useControlContext } from "../../hooks/use-control-context.hook";
import { View } from "../atoms/view";

export const ControlContainer = memo(function ControlContainer(
  props: ControlContainerProps,
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

  const containerStyle = useMemo(
    () => [styles.inputContainer, style],
    [styles.inputContainer, style],
  );

  return <View style={containerStyle} {...rest} />;
});

function themedStyles(
  theme: AppTheme,
  { size, variant, disabled, error }: ControlFieldThemeProps,
) {
  const controlContainerTokens = theme.components.controlContainer;
  const sizeTokens = controlContainerTokens.sizes[size];
  const appearanceTokens = getFieldStateTokens(
    controlContainerTokens.variants[variant],
    { disabled, error: Boolean(error) },
  );

  return StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderRadius: controlContainerTokens.borderRadius,
      borderWidth: controlContainerTokens.borderWidth,

      opacity: appearanceTokens.opacity,
      backgroundColor: appearanceTokens.backgroundColor,
      borderColor: appearanceTokens.borderColor,
    },
  });
}
