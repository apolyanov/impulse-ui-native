import type { TextStyle } from "react-native";
import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import type {
  AppTheme,
  TypographyPresetKey,
  TypographyProps,
} from "@impulse-ui-native/theme";
import { useStyleProps, useTheme } from "@impulse-ui-native/theme";

import type { TextProps } from "../types";

const numericFontVariant: TextStyle["fontVariant"] = ["tabular-nums"];
const defaultFontVariant: TextStyle["fontVariant"] = [];

export function createPreset(
  config: (theme: AppTheme) => TypographyProps & Pick<TextProps, "color">,
  key: TypographyPresetKey,
) {
  const Component = (props: TextProps) => {
    const {
      style,
      numeric,
      fontFamily: customFontFamily,
      fontVariant: customFontVariant,
      fontStyle,
      fontWeight,
      ...rest
    } = props;

    const theme = useTheme();

    const extractedStyleProps = useStyleProps(props);

    const typographyStyle = useMemo(() => {
      const themedConfig = config(theme);

      const resolvedFontStyle = fontStyle ?? themedConfig.fontStyle ?? "normal";
      const resolvedFontWeight = fontWeight ?? themedConfig.fontWeight ?? 400;

      const fontFamily =
        customFontFamily ??
        themedConfig.fontFamily ??
        theme.fontFamily[resolvedFontStyle][resolvedFontWeight];

      return StyleSheet.flatten([
        { color: theme.colors.text.primary },
        themedConfig,
        extractedStyleProps,
        {
          fontFamily,
          fontVariant: numeric
            ? numericFontVariant
            : (customFontVariant ??
              themedConfig.fontVariant ??
              defaultFontVariant),
        },
        style,
      ]);
    }, [
      theme,
      extractedStyleProps,
      style,
      numeric,
      customFontFamily,
      customFontVariant,
      fontStyle,
      fontWeight,
    ]);

    return <Text {...rest} style={typographyStyle} />;
  };

  Component.displayName = `Typography.${key}`;

  return memo(Component);
}
