import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BeltDuotone = memo(function BeltDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M8,88h96v80H8Zm176,0v80h64V88Z" opacity={0.2} />
      <Path d="M248,160H192V96h56a8,8,0,0,0,0-16H189.84A16,16,0,0,0,176,72H112a16,16,0,0,0-13.84,8H64a8,8,0,0,0-16,0H8A8,8,0,0,0,8,96H48v64H8a8,8,0,0,0,0,16H48a8,8,0,0,0,16,0H98.16A16,16,0,0,0,112,184h64a16,16,0,0,0,13.84-8H248a8,8,0,0,0,0-16ZM64,96H96v64H64Zm48,72V88h64v32H144a8,8,0,0,0,0,16h32v31.8c0,.07,0,.13,0,.2Z" />
    </Svg>
  );
});
