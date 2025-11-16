import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const IntersectionBold = memo(function IntersectionBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,120v80a12,12,0,0,1-24,0V120a60,60,0,0,0-120,0v80a12,12,0,0,1-24,0V120a84,84,0,0,1,168,0Z" />
    </Svg>
  );
});
