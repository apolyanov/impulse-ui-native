import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowDownLeftThinIcon = memo(function ArrowDownLeftThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M194.83,66.83,73.66,188H168a4,4,0,0,1,0,8H64a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v94.34L189.17,61.17a4,4,0,1,1,5.66,5.66Z" />
    </Svg>
  );
});
