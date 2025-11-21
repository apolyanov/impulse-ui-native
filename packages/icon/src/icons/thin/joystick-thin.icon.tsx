import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const JoystickThinIcon = memo(function JoystickThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,148H132V91.77a36,36,0,1,0-8,0V148H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM100,56a28,28,0,1,1,28,28A28,28,0,0,1,100,56ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-48-88a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H168A4,4,0,0,1,164,120Z" />
    </Svg>
  );
});
