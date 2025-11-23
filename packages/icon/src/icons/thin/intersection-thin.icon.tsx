import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const IntersectionThinIcon = memo(function IntersectionThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,120v80a4,4,0,0,1-8,0V120a68,68,0,0,0-136,0v80a4,4,0,0,1-8,0V120a76,76,0,0,1,152,0Z" />
    </Svg>
  );
});
