import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { DividerProps } from "../../types";
import { View } from "./view";

export const Divider = memo(function Divider({
  accessible = true,
  color,
  inset = "none",
  orientation = "horizontal",
  role = "separator",
  style,
  tone = "subtle",
  ...props
}: DividerProps) {
  const tokens = useComponentsTokens().divider;
  const extractedStyleProps = useStyleProps(props);

  const dividerStyle = useMemo(() => {
    const insetStart = inset === "start" || inset === "both";
    const insetEnd = inset === "end" || inset === "both";

    return StyleSheet.flatten([
      styles.base,
      orientation === "horizontal"
        ? {
            height: tokens.thickness,
            marginEnd: insetEnd ? tokens.inset : 0,
            marginStart: insetStart ? tokens.inset : 0,
          }
        : {
            marginBottom: insetEnd ? tokens.inset : 0,
            marginTop: insetStart ? tokens.inset : 0,
            width: tokens.thickness,
          },
      { backgroundColor: color ?? tokens.colors[tone] },
      extractedStyleProps,
      style,
    ]);
  }, [color, extractedStyleProps, inset, orientation, style, tone, tokens]);

  return (
    <View {...props} accessible={accessible} role={role} style={dividerStyle} />
  );
});

const styles = StyleSheet.create({
  base: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
});
