import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  ComponentSize,
  ComponentVariant,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ControlContainerProps } from "../../types";
import { View } from "../atoms/view";
import { useControlContext } from "./provider";

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
  const controlContainerTokens = theme.components.controlContainer;
  const sizeTokens = controlContainerTokens.sizes[size];
  const variantTokens = controlContainerTokens.variants[variant];

  return StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderRadius: controlContainerTokens.borderRadius,
      borderWidth: controlContainerTokens.borderWidth,

      opacity: disabled ? controlContainerTokens.disabledOpacity : 1,

      backgroundColor: disabled
        ? variantTokens.disabledBackgroundColor
        : variantTokens.backgroundColor,

      borderColor: error
        ? variantTokens.errorBorderColor
        : disabled
          ? variantTokens.disabledBorderColor
          : variantTokens.borderColor,

      borderBottomColor: error
        ? variantTokens.errorBorderBottomColor
        : disabled
          ? variantTokens.disabledBorderBottomColor
          : variantTokens.borderBottomColor,
    },
  });
}
