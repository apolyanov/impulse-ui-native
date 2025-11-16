import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MoonFill = memo(function MoonFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z" />
    </Svg>
  );
});
