import {
  TypographyPresetKey,
  TypographyProps,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";
import { memo, useMemo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export function createPreset(
  config: TypographyProps,
  key: TypographyPresetKey
) {
  const Component = (props: TextProps) => {
    const theme = useTheme();
    const extractedStyleProps = useStyleProps(props);

    const style = useMemo(() => {
      return StyleSheet.flatten([
        config,
        theme.components?.typography?.[key],
        extractedStyleProps,
        props.style,
      ]);
    }, [theme.components?.typography, extractedStyleProps, props.style]);

    return <Text {...props} style={style} />;
  };

  Component.displayName = `Typography.${key}`;
  return memo(Component);
}
