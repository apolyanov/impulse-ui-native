import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowLeftRegularIcon = memo(function ArrowElbowLeftRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L32,99.31V152a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H43.31L136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" />
    </Svg>
  );
});
