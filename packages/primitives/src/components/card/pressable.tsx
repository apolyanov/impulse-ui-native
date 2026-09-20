import type {
  AccessibilityState,
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
  accessibilityRole = "button",
  accessibilityState,
  disabled,
  style,
  ...props
}: CardPressableProps) {
  const styles = useThemedStyles(cardRootStyles);
  const extractedStyleProps = useStyleProps(props);

  const resolvedAccessibilityState = useMemo<AccessibilityState>(
    () => ({
      ...accessibilityState,
      disabled: disabled === true,
    }),
    [accessibilityState, disabled],
  );

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
    <Pressable
      {...props}
      accessibilityRole={accessibilityRole}
      accessibilityState={resolvedAccessibilityState}
      disabled={disabled === true}
      style={rootStyle}
    />
  );
});
