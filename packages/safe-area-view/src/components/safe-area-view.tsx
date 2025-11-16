import { useStyleProps } from "@impulse-ui-native/theme";
import { View, ViewProps } from "@impulse-ui-native/view";
import React, { memo, useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaViewProps = {
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
} & ViewProps;

export const SafeAreaView = memo(function SafeAreaView(
  props: SafeAreaViewProps
) {
  const { children, style, edges, ...rest } = props;

  const insets = useSafeAreaInsets();
  const defaultEdges = edges === undefined;
  const extractedStyleProps = useStyleProps(rest);

  const styles = useMemo<StyleProp<ViewStyle>>(() => {
    return StyleSheet.flatten([
      {
        paddingTop:
          defaultEdges || edges?.includes("top") ? insets.top : undefined,
        paddingBottom:
          defaultEdges || edges?.includes("bottom") ? insets.bottom : undefined,
        paddingLeft:
          defaultEdges || edges?.includes("left") ? insets.left : undefined,
        paddingRight:
          defaultEdges || edges?.includes("right") ? insets.right : undefined,
        flex: 1,
      },
      extractedStyleProps,
      style,
    ]);
  }, [
    defaultEdges,
    edges,
    insets.bottom,
    insets.left,
    insets.right,
    insets.top,
    style,
  ]);

  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  );
});
