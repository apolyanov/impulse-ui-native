import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubsetProperOfBold = memo(function SubsetProperOfBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,208a12,12,0,0,1-12,12H128a92,92,0,0,1,0-184h72a12,12,0,0,1,0,24H128a68,68,0,0,0,0,136h72A12,12,0,0,1,212,208Z" />
    </Svg>
  );
});
