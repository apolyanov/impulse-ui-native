import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SupersetProperOfThinIcon = memo(function SupersetProperOfThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,128a84.09,84.09,0,0,1-84,84H64a4,4,0,0,1,0-8h72a76,76,0,0,0,0-152H64a4,4,0,0,1,0-8h72A84.09,84.09,0,0,1,220,128Z" />
    </Svg>
  );
});
