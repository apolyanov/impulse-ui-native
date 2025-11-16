import {
  TypographyPresetKey,
  TypographyProps,
  useStyleProps,
  useThemeContext,
} from "@impulse-ui-native/theme";
import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import {
  FontWeightsItalic,
  FontWeightsNormal,
} from "../constants/typography.constants";
import { TextProps } from "../types";

export function createPreset(
  config: TypographyProps,
  key: TypographyPresetKey
) {
  const Component = (props: TextProps) => {
    const context = useThemeContext();
    const extractedStyleProps = useStyleProps(props);

    const style = useMemo(() => {
      const fontWeights =
        props.fontStyle === "italic" ? FontWeightsItalic : FontWeightsNormal;

      return StyleSheet.flatten([
        config,
        context.theme.components?.typography?.[key],
        extractedStyleProps,
        {
          fontFamily: fontWeights[props.fontWeight ?? 400],
        },
        props.style,
      ]);
    }, [
      context.theme.components?.typography,
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
