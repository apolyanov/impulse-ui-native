import { memo, PropsWithChildren, useCallback, useMemo } from "react";
import {
  Pressable as RNPressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useColors, useStyleProps } from "@impulse-ui-native/theme";
import { useEventCallback } from "@impulse-ui-native/core";

export interface PressableCoreProps extends PressableProps {
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}

export const Pressable = memo(function PressableCore({
  children,
  disabled,
  pressedStyle,
  style,
  ...props
}: PropsWithChildren<PressableCoreProps>) {
  const colors = useColors();
  const extractedStyleProps = useStyleProps(props);

  const pressableStyles = useEventCallback(
    (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
      let overrideStyle: StyleProp<ViewStyle>;

      if (typeof style === "function") {
        overrideStyle = style(state);
      } else {
        overrideStyle = style;
      }

      return StyleSheet.flatten([
        { opacity: disabled || state.pressed ? 0.3 : 1 },
        extractedStyleProps,
        overrideStyle,
        state.pressed ? pressedStyle : undefined,
      ]);
    }
  );

  const androidRipple = useMemo(
    () => ({
      color: colors.neutral[4],
      borderless: false,
    }),
    [colors]
  );

  return (
    <RNPressable
      style={pressableStyles}
      disabled={disabled}
      android_ripple={androidRipple}
      {...props}
    >
      {children}
    </RNPressable>
  );
});
