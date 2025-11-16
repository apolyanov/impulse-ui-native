import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalLowLight = memo(function CellSignalLowLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z" />
    </Svg>
  );
});
