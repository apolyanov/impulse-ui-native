import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  getDividerTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { DividerProps } from "../../types";
import { View } from "./view";

export const Divider = memo(function Divider({
  color,
  inset = "none",
  orientation = "horizontal",
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

  return <View {...props} style={dividerStyle} />;
});

interface DividerThemeProps {
  color: DividerProps["color"];
  inset: NonNullable<DividerProps["inset"]>;
  orientation: NonNullable<DividerProps["orientation"]>;
  tone: NonNullable<DividerProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: DividerThemeProps) {
  const { color, inset, orientation, tone } = props;
  const dividerTokens = getDividerTokens(theme.components.divider, {
    inset,
    orientation,
    tone,
  });

  return StyleSheet.create({
    divider: {
      alignSelf: "stretch",
      flexShrink: 0,
      height: dividerTokens.height,
      marginBottom: dividerTokens.marginBottom,
      marginEnd: dividerTokens.marginEnd,
      marginStart: dividerTokens.marginStart,
      marginTop: dividerTokens.marginTop,
      width: dividerTokens.width,
      backgroundColor: color ?? dividerTokens.backgroundColor,
    },
  });
}
