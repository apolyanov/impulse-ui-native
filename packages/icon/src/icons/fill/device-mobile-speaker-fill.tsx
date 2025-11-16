import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeviceMobileSpeakerFill = memo(function DeviceMobileSpeakerFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
