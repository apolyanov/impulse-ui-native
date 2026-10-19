import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { getFieldStateTokens } from "@impulse-ui-native/theme";

import type { ControlFieldThemeProps } from "../../types/control-theme.types";

export function controlContainerStyles(
  theme: AppTheme,
  { size, variant, disabled, error }: ControlFieldThemeProps,
) {
  const tokens = theme.components.controlContainer;
  const sizeTokens = tokens.sizes[size];
  const appearance = getFieldStateTokens(tokens.variants[variant], {
    disabled,
    error: Boolean(error),
  });

  return StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
      opacity: appearance.opacity,
      backgroundColor: appearance.backgroundColor,
      borderColor: appearance.borderColor,
    },
  });
}
