import { useEffect, useMemo } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useStyleProps } from "@impulse-ui-native/theme";

import { KeyboardAvoidingViewProps } from "../types";
import { useKeyboardOffset } from "../hooks";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export const KeyboardAvoidingView = ({
  targetRef,
  spacing = 12,
  mode = "translate",
  style: styleProp,
  ...rest
}: KeyboardAvoidingViewProps) => {
  const keyboardOffset = useKeyboardOffset();
  const extractedStyle = useStyleProps(rest);

  const baseStyle = useMemo(
    () => StyleSheet.flatten([extractedStyle, styleProp]),
    [extractedStyle, styleProp]
  );

  const translateY = useSharedValue(0);

  const measureTarget = async () => {
    return new Promise<{ y: number; height: number }>(resolve => {
      if (targetRef) {
        targetRef.measureInWindow((_x, y, _width, height) => {
          resolve({ y, height });
        });
      }

      return resolve({ y: 0, height: 0 });
    });
  };

  useEffect(() => {
    const animate = async () => {
      if (!targetRef) {
        translateY.value = withTiming(0);
        return;
      }

      const { y, height } = await measureTarget();
      const targetBottom = y + height;
      const keyboardTop = SCREEN_HEIGHT - keyboardOffset;

      if (keyboardOffset > 0 && targetBottom > keyboardTop) {
        const shift = targetBottom - keyboardTop + spacing;
        console.log(shift);
        translateY.value = withTiming(-shift, { duration: 180 });
      } else {
        translateY.value = withTiming(0, { duration: 180 });
      }
    };

    animate();
  }, [keyboardOffset, targetRef]);

  const animatedStyle = useAnimatedStyle(() => {
    if (mode === "margin") return { marginBottom: -translateY.value };
    if (mode === "padding") return { paddingBottom: -translateY.value };
    return { transform: [{ translateY: translateY.value }] };
  });

  return <Animated.View {...rest} style={[baseStyle, animatedStyle]} />;
};
