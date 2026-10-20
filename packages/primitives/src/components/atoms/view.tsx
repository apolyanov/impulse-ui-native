import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { forwardRef, memo, useMemo } from "react";
import { View as NativeView, StyleSheet } from "react-native";

import {
  getShadowStyle,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import { ViewProps } from "../../types";

export const View: NamedExoticComponent<
  PropsWithoutRef<ViewProps> & RefAttributes<ComponentRef<typeof NativeView>>
> = memo(
  forwardRef<ComponentRef<typeof NativeView>, ViewProps>(function View(
    props: ViewProps,
    ref,
  ) {
    const { style, shadow, shadowPosition, ...rest } = props;

    const { colors, shadows } = useTheme();

    const extractedStyleProps = useStyleProps(props);

    const viewStyle = useMemo(() => {
      return StyleSheet.flatten([
        getShadowStyle(shadow, shadowPosition, colors, shadows),
        extractedStyleProps,
        style,
      ]);
    }, [extractedStyleProps, style, shadow, shadowPosition, colors, shadows]);

    return <NativeView {...rest} style={viewStyle} ref={ref} />;
  }),
);
