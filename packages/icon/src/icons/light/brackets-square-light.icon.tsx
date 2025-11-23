import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BracketsSquareLightIcon = memo(function BracketsSquareLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z" />
    </Svg>
  );
});
