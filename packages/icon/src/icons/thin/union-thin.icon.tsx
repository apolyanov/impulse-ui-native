import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UnionThinIcon = memo(function UnionThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,64v80a76,76,0,0,1-152,0V64a4,4,0,0,1,8,0v80a68,68,0,0,0,136,0V64a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
