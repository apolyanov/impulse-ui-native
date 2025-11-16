import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CircleHalfFill = memo(function CircleHalfFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z" />
    </Svg>
  );
});
