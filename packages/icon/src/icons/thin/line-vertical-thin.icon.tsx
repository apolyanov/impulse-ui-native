import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LineVerticalThinIcon = memo(function LineVerticalThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M132,24V232a4,4,0,0,1-8,0V24a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
