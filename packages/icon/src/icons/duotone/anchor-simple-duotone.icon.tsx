import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AnchorSimpleDuotoneIcon = memo(function AnchorSimpleDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152,64a24,24,0,1,1-24-24A24,24,0,0,1,152,64Z" opacity={0.2} />
      <Path d="M224,112H200a8,8,0,0,0,0,16h15.64A88.15,88.15,0,0,1,136,207.63V95a32,32,0,1,0-16,0V207.63A88.15,88.15,0,0,1,40.36,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" />
    </Svg>
  );
});
