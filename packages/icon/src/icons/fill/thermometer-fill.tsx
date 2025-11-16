import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ThermometerFill = memo(function ThermometerFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,104H104V40a16,16,0,0,1,32,0Z" />
    </Svg>
  );
});
