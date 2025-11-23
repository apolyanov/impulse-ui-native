import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TagChevronLightIcon = memo(function TagChevronLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H32a6,6,0,0,0-5,9.33L72.79,128,27,196.67A6,6,0,0,0,32,206H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H43.21L85,131.33a6,6,0,0,0,0-6.66L43.21,62H187.72a2,2,0,0,1,1.66.89L232.79,128Z" />
    </Svg>
  );
});
