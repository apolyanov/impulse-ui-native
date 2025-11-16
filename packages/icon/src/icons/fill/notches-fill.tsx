import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NotchesFill = memo(function NotchesFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,40V192a8,8,0,0,1-8,8H40a8,8,0,0,1-5.66-13.66l152-152A8,8,0,0,1,200,40Z" />
    </Svg>
  );
});
