import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftThinIcon = memo(function ArrowElbowLeftThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M234.83,98.83l-96,96a4,4,0,0,1-5.66,0L28,89.66V152a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H33.66L136,186.34l93.17-93.17a4,4,0,1,1,5.66,5.66Z" />
    </Svg>
  );
});
