import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DesktopBold = memo(function DesktopBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,36H48A28,28,0,0,0,20,64V172a28,28,0,0,0,28,28h68v12H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V200h68a28,28,0,0,0,28-28V64A28,28,0,0,0,208,36ZM48,60H208a4,4,0,0,1,4,4v72H44V64A4,4,0,0,1,48,60ZM208,176H48a4,4,0,0,1-4-4V160H212v12A4,4,0,0,1,208,176Z" />
    </Svg>
  );
});
