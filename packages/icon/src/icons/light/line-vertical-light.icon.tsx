import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LineVerticalLightIcon = memo(function LineVerticalLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M134,24V232a6,6,0,0,1-12,0V24a6,6,0,0,1,12,0Z" />
    </Svg>
  );
});
