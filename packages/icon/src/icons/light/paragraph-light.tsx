import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ParagraphLight = memo(function ParagraphLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,42H96a62,62,0,0,0,0,124h42v42a6,6,0,0,0,12,0V54h28V208a6,6,0,0,0,12,0V54h18a6,6,0,0,0,0-12ZM138,154H96A50,50,0,0,1,96,54h42Z" />
    </Svg>
  );
});
