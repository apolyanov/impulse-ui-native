import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SupersetProperOfBoldIcon = memo(function SupersetProperOfBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228,128a92.1,92.1,0,0,1-92,92H64a12,12,0,0,1,0-24h72a68,68,0,0,0,0-136H64a12,12,0,0,1,0-24h72A92.1,92.1,0,0,1,228,128Z" />
    </Svg>
  );
});
