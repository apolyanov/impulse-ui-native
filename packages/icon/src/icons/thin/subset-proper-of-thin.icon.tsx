import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubsetProperOfThinIcon = memo(function SubsetProperOfThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,208a4,4,0,0,1-4,4H128a84,84,0,0,1,0-168h72a4,4,0,0,1,0,8H128a76,76,0,0,0,0,152h72A4,4,0,0,1,204,208Z" />
    </Svg>
  );
});
