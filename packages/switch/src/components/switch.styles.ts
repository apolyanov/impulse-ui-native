import { I18nManager, StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";

import type { SwitchThemeProps } from "../types";

export function switchStyles(theme: AppTheme, props: SwitchThemeProps) {
  const { size } = props;

  const switchTokens = theme.components.switch;
  const sizeTokens = switchTokens.sizes[size];
  const thumbInset = sizeTokens.trackPadding;

  return StyleSheet.create({
    root: {
      width: sizeTokens.width,
      height: sizeTokens.height,
    },

    track: {
      position: "relative",
      justifyContent: "center",

      width: sizeTokens.width,
      height: sizeTokens.height,

      borderWidth: switchTokens.borderWidth,
      borderRadius: switchTokens.borderRadius,
    },

    thumb: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      left: I18nManager.isRTL ? undefined : thumbInset,
      right: I18nManager.isRTL ? thumbInset : undefined,

      width: sizeTokens.thumbSize,
      height: sizeTokens.thumbSize,

      borderRadius: switchTokens.thumbBorderRadius,
    },

    loadingIndicator: {
      transform: [{ scale: sizeTokens.loadingIndicatorScale }],
    },
  });
}
