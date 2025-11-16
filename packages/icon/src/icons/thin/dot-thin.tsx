import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotThin = memo(function DotThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z" />
    </Svg>
  );
});
