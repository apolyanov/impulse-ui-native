import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const OptionBoldIcon = memo(function OptionBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M236,192a12,12,0,0,1-12,12H160.94a19.89,19.89,0,0,1-17.88-11.06L92.58,92H32a12,12,0,0,1,0-24H95.06a19.89,19.89,0,0,1,17.88,11.06L163.42,180H224A12,12,0,0,1,236,192ZM152,92h72a12,12,0,0,0,0-24H152a12,12,0,0,0,0,24Z" />
    </Svg>
  );
});
