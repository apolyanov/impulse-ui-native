import type { PropsWithChildren } from "react";
import { memo, useEffect, useMemo } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { SkeletonBoneProps } from "../types";

export const Bone = memo(function Bone(
  props: PropsWithChildren<SkeletonBoneProps>,
) {
  const { style: styleProp, ...rest } = props;

  const tokens = useComponentsTokens();

  const boneTokens = tokens.skeleton.bone;

  const opacity = useSharedValue(boneTokens.initialOpacity);
  const extractedStyleProps = useStyleProps(props);

  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: boneTokens.backgroundColor,
      borderColor: boneTokens.borderColor,
      opacity: opacity.value,
    };
  });

  const animatedStyle = useMemo(
    () => [extractedStyleProps, styleProp, style],
    [extractedStyleProps, style, styleProp],
  );

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

  return <Animated.View {...rest} style={animatedStyle} />;
});
