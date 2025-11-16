import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalLowBold = memo(function CellSignalLowBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M92,152v48a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z" />
    </Svg>
  );
});
