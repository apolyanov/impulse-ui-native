import { useStyleProps } from "@impulse-ui-native/theme";
import { forwardRef, memo, useMemo } from "react";
import { View as NativeView, StyleSheet } from "react-native";

import { ViewProps } from "../types";

export const View = memo(
  forwardRef<NativeView, ViewProps>(function View(props: ViewProps, ref) {
    const extractedStyleProps = useStyleProps(props);

    const style = useMemo(() => {
      return StyleSheet.flatten([extractedStyleProps, props.style]);
    }, [extractedStyleProps, props.style]);

    return <NativeView {...props} style={style} ref={ref} />;
  })
);
