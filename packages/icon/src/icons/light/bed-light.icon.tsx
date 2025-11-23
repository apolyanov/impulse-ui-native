import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BedLightIcon = memo(function BedLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,74H30V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V174H242v34a6,6,0,0,0,12,0V112A38,38,0,0,0,216,74ZM30,86h76v76H30Zm88,76V86h98a26,26,0,0,1,26,26v50Z" />
    </Svg>
  );
});
