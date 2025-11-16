import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareThin = memo(function SquareThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
    </Svg>
  );
});
