import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SmileyBlankDuotoneIcon = memo(function SmileyBlankDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity={0.2} />
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM104,108A12,12,0,1,1,92,96,12,12,0,0,1,104,108Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Z" />
    </Svg>
  );
});
