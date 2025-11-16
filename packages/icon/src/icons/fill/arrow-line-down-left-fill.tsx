import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineDownLeftFill = memo(function ArrowLineDownLeftFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M189.66,90.34a8,8,0,0,1,0,11.32L131.31,160l42.35,42.34A8,8,0,0,1,168,216H72a8,8,0,0,1-8-8V112a8,8,0,0,1,13.66-5.66L120,148.69l58.34-58.35A8,8,0,0,1,189.66,90.34ZM224,40H48a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
