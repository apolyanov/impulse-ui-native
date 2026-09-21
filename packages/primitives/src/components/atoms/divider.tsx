import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

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
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { color, inset, orientation, tone },
    [color, inset, orientation, tone],
  );
  const dividerStyle = useMemo(
    () => [styles.divider, extractedStyleProps, style],
    [extractedStyleProps, style, styles.divider],
  );

  return (
    <View {...props} accessible={accessible} role={role} style={dividerStyle} />
  );
});

interface DividerThemeProps {
  color: DividerProps["color"];
  inset: NonNullable<DividerProps["inset"]>;
  orientation: NonNullable<DividerProps["orientation"]>;
  tone: NonNullable<DividerProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: DividerThemeProps) {
  const { color, inset, orientation, tone } = props;
  const dividerTokens = theme.components.divider;
  const insetStart = inset === "start" || inset === "both";
  const insetEnd = inset === "end" || inset === "both";

  return StyleSheet.create({
    divider: {
      alignSelf: "stretch",
      flexShrink: 0,
      height:
        orientation === "horizontal" ? dividerTokens.thickness : undefined,
      marginBottom:
        orientation === "vertical" && insetEnd ? dividerTokens.inset : 0,
      marginEnd:
        orientation === "horizontal" && insetEnd ? dividerTokens.inset : 0,
      marginStart:
        orientation === "horizontal" && insetStart ? dividerTokens.inset : 0,
      marginTop:
        orientation === "vertical" && insetStart ? dividerTokens.inset : 0,
      width: orientation === "vertical" ? dividerTokens.thickness : undefined,
      backgroundColor: color ?? dividerTokens.colors[tone],
    },
  });
}
