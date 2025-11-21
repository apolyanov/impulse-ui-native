import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ParallelogramFillIcon = memo(function ParallelogramFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z" />
    </Svg>
  );
});
