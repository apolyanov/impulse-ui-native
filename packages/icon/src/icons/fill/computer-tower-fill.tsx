import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ComputerTowerFill = memo(function ComputerTowerFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
