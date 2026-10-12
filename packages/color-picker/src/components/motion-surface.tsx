import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import type { ColorMotionSurfaceProps } from "../types/color-motion.types";
import { TransparentStops } from "../constants/motion.constants";
import { rgbaToNativeColor } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorMotionSurface = memo(function ColorMotionSurface({
  rgba,
}: ColorMotionSurfaceProps) {
  const surfaceStyle = useAnimatedStyle(() => ({
    backgroundColor: rgbaToNativeColor(rgba.get()),
  }));
  const previewStyle = useMemo(
    () => [StyleSheet.absoluteFill, surfaceStyle],
    [surfaceStyle],
  );

  return (
    <>
      <ColorGradient colors={TransparentStops} checkerboard />
      <Animated.View pointerEvents="none" style={previewStyle} />
    </>
  );
});
