import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeskFillIcon = memo(function DeskFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM80,112H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm56,8a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm64-8H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
