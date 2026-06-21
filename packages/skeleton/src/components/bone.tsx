import { memo, PropsWithChildren, useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { useComponentsTokens } from "@impulse-ui-native/theme";

import { SkeletonBoneProps } from "../types";

export const Bone = memo(function Bone(
  props: PropsWithChildren<SkeletonBoneProps>,
) {
  const tokens = useComponentsTokens().skeleton.bone;
  const opacity = useSharedValue(tokens.initialOpacity);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(tokens.animatedOpacity, {
        duration: tokens.animationDuration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );

    return () => {
      cancelAnimation(opacity);
    };
  }, [opacity, tokens.animatedOpacity, tokens.animationDuration]);

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.borderColor,
      opacity: opacity.value,
    };
  });

  return <Animated.View {...props} style={[props.style, style]} />;
});
