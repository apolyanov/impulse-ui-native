import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const OvenFill = memo(function OvenFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM172,56a12,12,0,1,1-12,12A12,12,0,0,1,172,56Zm-44,0a12,12,0,1,1-12,12A12,12,0,0,1,128,56ZM84,56A12,12,0,1,1,72,68,12,12,0,0,1,84,56ZM192,192H64V104H192Z" />
    </Svg>
  );
});
