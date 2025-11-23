import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUpLeftLightIcon = memo(function ArrowUpLeftLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196.24,196.24a6,6,0,0,1-8.48,0L70,78.48V168a6,6,0,0,1-12,0V64a6,6,0,0,1,6-6H168a6,6,0,0,1,0,12H78.48L196.24,187.76A6,6,0,0,1,196.24,196.24Z" />
    </Svg>
  );
});
