import { forwardRef, memo, useMemo } from "react";
import { View as NativeView, StyleSheet } from "react-native";

import {
  getShadowStyle,
  useColors,
  useStyleProps,
} from "@impulse-ui-native/theme";

import { ViewProps } from "../../types";

export const View = memo(
  forwardRef<NativeView, ViewProps>(function View(props: ViewProps, ref) {
    const { style, shadow, shadowPosition, ...rest } = props;

    const colors = useColors();
    const extractedStyleProps = useStyleProps(props);

    const viewStyle = useMemo(() => {
      return StyleSheet.flatten([
        getShadowStyle(shadow, shadowPosition, colors),
        extractedStyleProps,
        style,
      ]);
    }, [extractedStyleProps, style, shadow, shadowPosition, colors]);

    return <NativeView {...rest} style={viewStyle} ref={ref} />;
  }),
);
