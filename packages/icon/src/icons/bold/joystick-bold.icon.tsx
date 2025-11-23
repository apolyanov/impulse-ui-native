import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const JoystickBoldIcon = memo(function JoystickBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,144H140V98.32a44,44,0,1,0-24,0V144H48a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V164A20,20,0,0,0,208,144ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Zm96,148H52V168H204ZM172,104h32a12,12,0,0,1,0,24H172a12,12,0,0,1,0-24Z" />
    </Svg>
  );
});
