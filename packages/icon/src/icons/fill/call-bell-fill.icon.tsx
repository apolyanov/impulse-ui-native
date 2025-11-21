import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CallBellFillIcon = memo(function CallBellFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M16,176a8,8,0,0,1,8-8h8V152a96.12,96.12,0,0,1,88-95.66V40H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16H136V56.34A96.12,96.12,0,0,1,224,152v16h8a8,8,0,0,1,0,16H24A8,8,0,0,1,16,176Zm216,24H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
