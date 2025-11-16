import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MusicNoteFill = memo(function MusicNoteFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34Z" />
    </Svg>
  );
});
