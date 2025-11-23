import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GreaterThanOrEqualThinIcon = memo(function GreaterThanOrEqualThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M54.62,156.25,196.43,104,54.62,51.75a4,4,0,0,1,2.76-7.5l152,56a4,4,0,0,1,0,7.5l-152,56A3.91,3.91,0,0,1,56,164a4,4,0,0,1-1.38-7.75ZM208,196H56a4,4,0,0,0,0,8H208a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
