import { useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  getShadowStyle,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import type { FlyoutKeyboardAwareViewProps } from "../types";

export function useFlyoutKeyboardBodyStyle({
  style,
  shadow,
  shadowPosition,
  ...props
}: FlyoutKeyboardAwareViewProps) {
  const theme = useTheme();
  const styleProps = useStyleProps(props);
  const resolvedStyle = useMemo(
    () =>
      StyleSheet.flatten([
        getShadowStyle(shadow, shadowPosition, theme.colors, theme.shadows),
        styleProps,
        style,
      ]) ?? {},
    [shadow, shadowPosition, theme.colors, theme.shadows, styleProps, style],
  );
  return resolvedStyle;
}
