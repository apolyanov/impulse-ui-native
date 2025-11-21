import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowLineUpRightFillIcon = memo(function ArrowLineUpRightFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
