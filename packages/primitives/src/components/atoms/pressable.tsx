import type { ComponentRef, PropsWithChildren } from "react";
import { forwardRef, memo, useCallback } from "react";
import {
  PressableStateCallbackType,
  Pressable as RNPressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import {
  getShadowStyle,
  useColors,
  useComponentsTokens,
  useStyleProps,
} from "@impulse-ui-native/theme";

import { PressableCoreProps } from "../../types";

export const Pressable = memo(
  forwardRef<
    ComponentRef<typeof RNPressable>,
    PropsWithChildren<PressableCoreProps>
  >(function PressableCore(
    { children, disabled, pressedStyle, style, ...props },
    ref,
  ) {
    const colors = useColors();
    const tokens = useComponentsTokens();
    const pressableTokens = tokens.pressable;
    const extractedStyleProps = useStyleProps(props);

    const pressableStyles = useCallback(
      (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
        let overrideStyle: StyleProp<ViewStyle>;

        if (typeof style === "function") {
          overrideStyle = style(state);
        } else {
          overrideStyle = style;
        }

        return StyleSheet.flatten([
          {
            opacity: disabled
              ? pressableTokens.disabledOpacity
              : state.pressed
                ? pressableTokens.pressedOpacity
                : 1,
          },
          getShadowStyle(props.shadow, props.shadowPosition, colors),
          extractedStyleProps,
          overrideStyle,
          state.pressed ? pressedStyle : undefined,
        ]);
      },
      [
        style,
        pressedStyle,
        disabled,
        extractedStyleProps,
        props.shadow,
        props.shadowPosition,
        colors,
        pressableTokens.disabledOpacity,
        pressableTokens.pressedOpacity,
      ],
    );

    return (
      <RNPressable
        {...props}
        ref={ref}
        style={pressableStyles}
        disabled={disabled}
      >
        {children}
      </RNPressable>
    );
  }),
);
