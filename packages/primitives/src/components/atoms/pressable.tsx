import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
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
  useComponentsTokens,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import { PressableCoreProps } from "../../types";

export const Pressable: NamedExoticComponent<
  PropsWithoutRef<PressableCoreProps> &
    RefAttributes<ComponentRef<typeof RNPressable>>
> = memo(
  forwardRef<ComponentRef<typeof RNPressable>, PressableCoreProps>(
    function PressableCore(
      { children, disabled, pressedStyle, style, ...props },
      ref,
    ) {
      const { colors, shadows } = useTheme();
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
            getShadowStyle(props.shadow, props.shadowPosition, colors, shadows),
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
          shadows,
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
    },
  ),
);
