import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SpeakerHifiRegular = memo(function SpeakerHifiRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24Zm0,192H64V40H192ZM116,76a12,12,0,1,1,12,12A12,12,0,0,1,116,76Zm12,116a40,40,0,1,0-40-40A40,40,0,0,0,128,192Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,128,128Z" />
    </Svg>
  );
});
