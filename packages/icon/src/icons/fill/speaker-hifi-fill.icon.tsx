import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SpeakerHifiFillIcon = memo(function SpeakerHifiFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152,160a24,24,0,1,1-24-24A24,24,0,0,1,152,160ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40ZM116,68a12,12,0,1,0,12-12A12,12,0,0,0,116,68Zm52,92a40,40,0,1,0-40,40A40,40,0,0,0,168,160Z" />
    </Svg>
  );
});
