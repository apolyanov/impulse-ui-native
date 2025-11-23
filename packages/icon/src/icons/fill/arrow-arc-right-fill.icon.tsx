import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowArcRightFillIcon = memo(function ArrowArcRightFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l26.19-26.18A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,175.86-75.18l26.48-26.48A8,8,0,0,1,240,88Z" />
    </Svg>
  );
});
