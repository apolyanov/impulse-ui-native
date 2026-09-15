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
  const tokens = useComponentsTokens();
  const boneTokens = tokens.skeleton.bone;
  const opacity = useSharedValue(boneTokens.initialOpacity);

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: boneTokens.backgroundColor,
      borderColor: boneTokens.borderColor,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(boneTokens.animatedOpacity, {
        duration: boneTokens.animationDuration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );

    return () => {
      cancelAnimation(opacity);
    };
  }, [boneTokens.animatedOpacity, boneTokens.animationDuration, opacity]);

  return <Animated.View {...props} style={[props.style, style]} />;
});
