import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UnionLight = memo(function UnionLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M206,64v80a78,78,0,0,1-156,0V64a6,6,0,0,1,12,0v80a66,66,0,0,0,132,0V64a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
