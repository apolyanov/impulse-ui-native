import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotBoldIcon = memo(function DotBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z" />
    </Svg>
  );
});
