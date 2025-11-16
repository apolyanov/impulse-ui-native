import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SupersetProperOfLight = memo(function SupersetProperOfLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M222,128a86.1,86.1,0,0,1-86,86H64a6,6,0,0,1,0-12h72a74,74,0,0,0,0-148H64a6,6,0,0,1,0-12h72A86.1,86.1,0,0,1,222,128Z" />
    </Svg>
  );
});
