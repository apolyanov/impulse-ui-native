import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AirplayLightIcon = memo(function AirplayLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132.56,156.1a6,6,0,0,0-9.11,0l-48,56A6,6,0,0,0,80,222h96a6,6,0,0,0,4.56-9.9ZM93.05,210l35-40.78L163,210ZM230,64V176a22,22,0,0,1-22,22h-8a6,6,0,0,1,0-12h8a10,10,0,0,0,10-10V64a10,10,0,0,0-10-10H48A10,10,0,0,0,38,64V176a10,10,0,0,0,10,10h8a6,6,0,0,1,0,12H48a22,22,0,0,1-22-22V64A22,22,0,0,1,48,42H208A22,22,0,0,1,230,64Z" />
    </Svg>
  );
});
