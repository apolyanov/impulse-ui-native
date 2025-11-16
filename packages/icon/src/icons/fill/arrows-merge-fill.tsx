import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowsMergeFill = memo(function ArrowsMergeFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31V192h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
