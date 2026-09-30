import type {
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { CardPressableProps } from "../../types";
import { Pressable } from "../atoms/pressable";
import { cardRootStyles } from "./root.styles";

export const CardPressable = memo(function CardPressable({
  disabled,
  style,
  ...props
}: CardPressableProps) {
  const styles = useThemedStyles(cardRootStyles);
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
