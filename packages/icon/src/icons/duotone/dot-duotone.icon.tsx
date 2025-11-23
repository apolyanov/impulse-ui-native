import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotDuotoneIcon = memo(function DotDuotone(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" opacity={0.2} />
      <Path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
    </Svg>
  );
});
