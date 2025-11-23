import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MonitorThinIcon = memo(function MonitorThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V64A12,12,0,0,1,48,52H208a12,12,0,0,1,12,12Zm-56,48a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Z" />
    </Svg>
  );
});
