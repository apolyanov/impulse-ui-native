import { memo, useId } from "react";
import { StyleSheet } from "react-native";
import { useAnimatedProps } from "react-native-reanimated";
import Svg, { Defs, LinearGradient, Mask, Rect, Stop } from "react-native-svg";

import type { ColorMotionSurfaceProps } from "../types/color-motion.types";
import {
  AnimatedColorRect,
  TransparentStops,
} from "../constants/motion.constants";
import { rgbaToNativeColor } from "../utils/color.utils";
import { ColorGradient } from "./gradient";

export const ColorMotionGradient = memo(function ColorMotionGradient({
  rgba,
}: ColorMotionSurfaceProps) {
  const id = useId().replace(/:/g, "");
  const rectProps = useAnimatedProps(() => ({
    color: rgbaToNativeColor(rgba.get(), true),
  }));

  const gradientFill = "url(#" + id + ")";

  return (
    <>
      <ColorGradient colors={TransparentStops} checkerboard />
      <Svg
        pointerEvents="none"
        width="100%"
        height="100%"
        style={StyleSheet.absoluteFill}
      >
        <Defs>
          <LinearGradient id={id} x1="0%" x2="100%" y1="0%" y2="0%">
            <Stop offset={0} stopColor="#FFFFFF" stopOpacity={0} />
            <Stop offset={1} stopColor="#FFFFFF" stopOpacity={1} />
          </LinearGradient>
          <Mask id={id + "-mask"} x="0%" y="0%" width="100%" height="100%">
            <Rect width="100%" height="100%" fill={gradientFill} />
          </Mask>
        </Defs>
        <AnimatedColorRect
          fill="currentColor"
          width="100%"
          height="100%"
          mask={"url(#" + id + "-mask)"}
          animatedProps={rectProps}
        />
      </Svg>
    </>
  );
});
