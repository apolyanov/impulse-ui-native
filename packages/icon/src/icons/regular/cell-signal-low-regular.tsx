import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalLowRegular = memo(function CellSignalLowRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M88,152v48a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z" />
    </Svg>
  );
});
