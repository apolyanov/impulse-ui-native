import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftLightIcon = memo(function ArrowElbowLeftLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236.24,100.24l-96,96a6,6,0,0,1-8.48,0L30,94.48V152a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H38.48L136,183.51l91.76-91.75a6,6,0,0,1,8.48,8.48Z" />
    </Svg>
  );
});
