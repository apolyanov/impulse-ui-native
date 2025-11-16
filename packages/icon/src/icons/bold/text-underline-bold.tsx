import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextUnderlineBold = memo(function TextUnderlineBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,224a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,224Zm-76-28a68.07,68.07,0,0,0,68-68V56a12,12,0,0,0-24,0v72a44,44,0,0,1-88,0V56a12,12,0,0,0-24,0v72A68.07,68.07,0,0,0,128,196Z" />
    </Svg>
  );
});
