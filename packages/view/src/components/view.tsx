import { useStyleProps } from "@impulse-ui-native/theme";
import { memo, useMemo } from "react";
import { View as NativeView, StyleSheet } from "react-native";
import { ViewProps } from "../types";

export const View = memo(function View(props: ViewProps) {
  const extractedStyleProps = useStyleProps(props);

  const style = useMemo(() => {
    return StyleSheet.flatten([extractedStyleProps, props.style]);
  }, [extractedStyleProps, props.style]);

  return <NativeView {...props} style={style} />;
});
