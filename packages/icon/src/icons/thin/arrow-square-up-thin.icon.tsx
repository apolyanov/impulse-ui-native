import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowSquareUpThinIcon = memo(function ArrowSquareUpThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-49.17-90.83a4,4,0,0,1-5.66,5.66L132,97.66V168a4,4,0,0,1-8,0V97.66L98.83,122.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Z" />
    </Svg>
  );
});
