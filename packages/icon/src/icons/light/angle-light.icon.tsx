import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AngleLightIcon = memo(function AngleLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M98,72a6,6,0,0,1,6-6A102.12,102.12,0,0,1,206,168a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90A6,6,0,0,1,98,72ZM240,194H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66V200a6,6,0,0,0,6,6H240a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
