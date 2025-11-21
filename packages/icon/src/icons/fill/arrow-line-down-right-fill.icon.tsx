import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineDownRightFillIcon = memo(function ArrowLineDownRightFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM195.06,96.61a8,8,0,0,0-8.72,1.73L144,140.69,85.66,82.34A8,8,0,0,0,74.34,93.66L132.69,152,90.34,194.34A8,8,0,0,0,96,208h96a8,8,0,0,0,8-8V104A8,8,0,0,0,195.06,96.61Z" />
    </Svg>
  );
});
