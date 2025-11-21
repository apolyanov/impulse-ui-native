import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GenderMaleLightIcon = memo(function GenderMaleLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,34H168a6,6,0,0,0,0,12h33.52L154.72,92.79a78,78,0,1,0,4.42,114.4h0a78.11,78.11,0,0,0,4.07-105.91L210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM150.66,198.7a66,66,0,1,1,0-93.36A66.1,66.1,0,0,1,150.66,198.7Z" />
    </Svg>
  );
});
