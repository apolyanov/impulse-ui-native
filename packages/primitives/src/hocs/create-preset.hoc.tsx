import { memo, useMemo } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import {
  AppTheme,
  TypographyPresetKey,
  TypographyProps,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import { TextProps } from "../types";

const numericFontVariant: TextStyle["fontVariant"] = ["tabular-nums"];
const defaultFontVariant: TextStyle["fontVariant"] = [];

export function createPreset(
  config: (theme: AppTheme) => TypographyProps,
  key: TypographyPresetKey,
) {
  const Component = (props: TextProps) => {
    const { style, numeric, fontStyle, fontWeight, ...rest } = props;

    const theme = useTheme();
    const extractedStyleProps = useStyleProps(props);

    const typographyStyle = useMemo(() => {
      const themedConfig = config(theme);

      const resolvedFontStyle = fontStyle ?? themedConfig.fontStyle ?? "normal";
      const resolvedFontWeight = fontWeight ?? themedConfig.fontWeight ?? 400;

      const fontFamily =
        theme.fontFamily[resolvedFontStyle][resolvedFontWeight];

      return StyleSheet.flatten([
        themedConfig,
        extractedStyleProps,
        {
          fontFamily,
          fontVariant: numeric ? numericFontVariant : defaultFontVariant,
        },
        style,
      ]);
    }, [theme, extractedStyleProps, style, numeric, fontStyle, fontWeight]);

    return <Text {...rest} style={typographyStyle} />;
  };

  Component.displayName = `Typography.${key}`;

  return memo(Component);
}
