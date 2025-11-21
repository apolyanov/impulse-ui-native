import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BracketsSquareBoldIcon = memo(function BracketsSquareBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M52,52V204H80a12,12,0,0,1,0,24H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H80a12,12,0,0,1,0,24ZM216,28H176a12,12,0,0,0,0,24h28V204H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Z" />
    </Svg>
  );
});
