import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartBarFill = memo(function ChartBarFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z" />
    </Svg>
  );
});
