import {
  TypographyPresetKey,
  TypographyProps,
  useComponentsTheme,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";
import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import { TextProps } from "../types";

export function createPreset(
  config: TypographyProps,
  key: TypographyPresetKey
) {
  const Component = (props: TextProps) => {
    const theme = useTheme();
    const componentsTheme = useComponentsTheme();
    const extractedStyleProps = useStyleProps(props);

    const style = useMemo(() => {
      const fontWeights = theme.fontWeights[props.fontStyle ?? "normal"];
      const fontFamily =
        fontWeights[props.fontWeight ?? config.fontWeight ?? 400];

      return StyleSheet.flatten([
        config,
        componentsTheme?.typography?.[key],
        extractedStyleProps,
        {
          fontFamily,
        },
        props.style,
      ]);
    }, [
      componentsTheme?.typography,
      theme.fontWeights,
      extractedStyleProps,
      props.style,
      props.fontStyle,
      props.fontWeight,
    ]);

    return <Text {...props} style={style} />;
  };

  Component.displayName = `Typography.${key}`;
  return memo(Component);
}
