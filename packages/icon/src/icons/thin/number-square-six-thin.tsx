import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberSquareSixThin = memo(function NumberSquareSixThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-84-92a32.08,32.08,0,0,0-9.75,1.52l21.18-35.47a4,4,0,0,0-6.86-4.1l-32.24,54A32,32,0,1,0,128,116Zm0,56a24,24,0,1,1,24-24A24,24,0,0,1,128,172Z" />
    </Svg>
  );
});
