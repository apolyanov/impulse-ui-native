import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MusicNotesSimpleThin = memo(function MusicNotesSimpleThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M210.46,20.85a4,4,0,0,0-3.43-.73l-128,32A4,4,0,0,0,76,56V174.87A32,32,0,1,0,84,196V59.12l120-30V142.87A32,32,0,1,0,212,164V24A4,4,0,0,0,210.46,20.85ZM52,220a24,24,0,1,1,24-24A24,24,0,0,1,52,220Zm128-32a24,24,0,1,1,24-24A24,24,0,0,1,180,188Z" />
    </Svg>
  );
});
