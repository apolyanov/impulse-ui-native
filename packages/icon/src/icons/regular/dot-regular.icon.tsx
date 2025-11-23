import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotRegularIcon = memo(function DotRegular(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
    </Svg>
  );
});
