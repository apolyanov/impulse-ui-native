import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import { ViewProps } from "../../types";
import { View } from "../atoms";

export const ControlRoot = memo(function ControlRoot(props: ViewProps) {
  const { style, ...rest } = props;

  const containerStyle = useMemo(() => [styles.container, style], [style]);

  return <View {...rest} style={containerStyle} />;
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
