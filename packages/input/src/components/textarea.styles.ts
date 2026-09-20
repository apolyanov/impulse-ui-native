import { StyleSheet } from "react-native";

import type { AppTheme, ComponentSize } from "@impulse-ui-native/theme";

interface TextareaStyleProps {
  disabled: boolean;
  error: boolean;
  size: ComponentSize;
}

export function textareaStyles(
  theme: AppTheme,
  { disabled, error, size }: TextareaStyleProps,
) {
  const tokens = theme.components.textarea;
  const sizeTokens = tokens.sizes[size];

  return StyleSheet.create({
    container: {
      alignItems: "stretch",
    },
    input: {
      lineHeight: sizeTokens.lineHeight,
      paddingVertical: sizeTokens.paddingVertical,
      textAlignVertical: "top",
    },
    footer: {
      alignItems: "flex-start",
      flexDirection: "row",
      gap: tokens.footerGap,
      justifyContent: "space-between",
      marginTop: tokens.footerMarginTop,
    },
    error: {
      flex: 1,
      marginTop: 0,
    },
    counter: {
      color: disabled
        ? tokens.disabledCounterColor
        : error
          ? tokens.errorCounterColor
          : tokens.counterColor,
      fontSize: tokens.counterFontSize,
    },
  });
}
