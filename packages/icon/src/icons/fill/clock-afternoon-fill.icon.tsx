import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ClockAfternoonFillIcon = memo(function ClockAfternoonFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H147.31l26.35,26.34a8,8,0,0,1-11.32,11.32l-40-40A8,8,0,0,1,128,120h56a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
