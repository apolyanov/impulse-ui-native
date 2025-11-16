import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MusicNoteSimpleRegular = memo(function MusicNoteSimpleRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z" />
    </Svg>
  );
});
