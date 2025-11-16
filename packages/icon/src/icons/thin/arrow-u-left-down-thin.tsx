import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowULeftDownThin = memo(function ArrowULeftDownThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,88v88a4,4,0,0,1-8,0V88A52,52,0,0,0,92,88V214.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L84,214.34V88a60,60,0,0,1,120,0Z" />
    </Svg>
  );
});
