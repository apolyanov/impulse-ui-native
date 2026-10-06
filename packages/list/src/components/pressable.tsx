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

import type { ListPressableProps } from "../types";

export const ListPressable = memo(function ListPressable({
  disabled,
  style,
  ...props
}: ListPressableProps) {
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

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.list.item;

  return StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      gap: tokens.gap,
      padding: tokens.padding,
    },
  });
}
