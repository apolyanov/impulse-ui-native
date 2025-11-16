import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ThermometerSimpleFill = memo(function ThermometerSimpleFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M160,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM128,24a16,16,0,0,1,16,16v64H112V40A16,16,0,0,1,128,24Z" />
    </Svg>
  );
});
