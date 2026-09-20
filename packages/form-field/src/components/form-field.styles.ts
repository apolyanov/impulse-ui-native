import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";

export function formFieldStyles(
  theme: AppTheme,
  { disabled }: { disabled: boolean },
) {
  return StyleSheet.create({
    description: {
      color: disabled
        ? theme.colors.text.disabled
        : theme.colors.text.secondary,
      marginBottom: theme.space.xxs,
    },
  });
}
