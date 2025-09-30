import {
  TypographyPresetKey,
  TypographyProps,
  useStyleProps,
  useThemeContext,
} from "@impulse-ui-native/theme";
import { memo, useMemo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export function createPreset(
  config: TypographyProps,
  key: TypographyPresetKey
) {
  const Component = (props: TextProps) => {
    const context = useThemeContext();
    const extractedStyleProps = useStyleProps(props);

    const style = useMemo(() => {
      return StyleSheet.flatten([
        config,
        context.theme.components?.typography?.[key],
        extractedStyleProps,
        props.style,
      ]);
    }, [
      context.theme.components?.typography,
      extractedStyleProps,
      props.style,
    ]);

    return <Text {...props} style={style} />;
  };

  Component.displayName = `Typography.${key}`;
  return memo(Component);
}
