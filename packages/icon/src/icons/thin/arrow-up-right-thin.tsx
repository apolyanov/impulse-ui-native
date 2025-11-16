import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowUpRightThin = memo(function ArrowUpRightThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z" />
    </Svg>
  );
});
