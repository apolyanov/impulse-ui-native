import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PauseCircleFill = memo(function PauseCircleFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
