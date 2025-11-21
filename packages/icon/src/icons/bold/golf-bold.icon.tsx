import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GolfBoldIcon = memo(function GolfBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M180,100a16,16,0,1,1-16-16A16,16,0,0,1,180,100Zm-48,16a16,16,0,1,0,16,16A16,16,0,0,0,132,116Zm88-20A92,92,0,1,1,128,4,92.1,92.1,0,0,1,220,96Zm-24,0a68,68,0,1,0-68,68A68.07,68.07,0,0,0,196,96ZM164,197.86a108.61,108.61,0,0,1-72,0,12,12,0,0,0-8,22.63,131.83,131.83,0,0,0,32,7V244a12,12,0,0,0,24,0V227.46a131.83,131.83,0,0,0,32-7,12,12,0,0,0-8-22.63Z" />
    </Svg>
  );
});
