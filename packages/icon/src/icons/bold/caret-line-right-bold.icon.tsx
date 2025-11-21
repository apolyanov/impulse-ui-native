import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineRightBoldIcon = memo(function CaretLineRightBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17-17L127,128,55.51,56.49a12,12,0,0,1,17-17ZM184,36a12,12,0,0,0-12,12V208a12,12,0,0,0,24,0V48A12,12,0,0,0,184,36Z" />
    </Svg>
  );
});
