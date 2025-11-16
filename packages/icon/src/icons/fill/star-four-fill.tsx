import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StarFourFill = memo(function StarFourFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z" />
    </Svg>
  );
});
