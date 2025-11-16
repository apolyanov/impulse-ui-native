import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BrandyDuotone = memo(function BrandyDuotone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,88A88,88,0,0,1,40,88Z" opacity={0.2} />
      <Path d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z" />
    </Svg>
  );
});
