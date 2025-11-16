import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WebcamFill = memo(function WebcamFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M160,104a32,32,0,1,1-32-32A32,32,0,0,1,160,104Zm72,104a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h88V183.6a80,80,0,1,1,16,0V200h88A8,8,0,0,1,232,208ZM128,152a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,152Z" />
    </Svg>
  );
});
