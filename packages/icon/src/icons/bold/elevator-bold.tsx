import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ElevatorBold = memo(function ElevatorBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM164,128v76H140V128Zm-48,76H92V128h24Zm88,0H188V116a12,12,0,0,0-12-12H80a12,12,0,0,0-12,12v88H52V52H204ZM100,76a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,76Z" />
    </Svg>
  );
});
