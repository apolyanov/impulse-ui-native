import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";

export function cardRootStyles(theme: AppTheme) {
  const tokens = theme.components.card;

  return StyleSheet.create({
    root: {
      overflow: "hidden",
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      borderRadius: tokens.borderRadius,
      borderWidth: tokens.borderWidth,
    },
  });
}
