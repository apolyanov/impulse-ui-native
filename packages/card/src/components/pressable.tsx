import type {
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Pressable } from "@impulse-ui-native/primitives";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardPressableProps } from "../types";

export const CardPressable = memo(function CardPressable({
  disabled,
  style,
  ...props
}: CardPressableProps) {
  const styles = useThemedStyles(themedStyles);
  const extractedStyleProps = useStyleProps(props);

  const rootStyle = useCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> =>
      StyleSheet.flatten([
        styles.root,
        extractedStyleProps,
        typeof style === "function" ? style(state) : style,
      ]),
    [extractedStyleProps, style, styles.root],
  );

  return (
    <Pressable {...props} disabled={disabled === true} style={rootStyle} />
  );
});

export function themedStyles(theme: AppTheme) {
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
