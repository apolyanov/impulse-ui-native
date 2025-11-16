import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CircleFill = memo(function CircleFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z" />
    </Svg>
  );
});
