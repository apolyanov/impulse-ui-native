import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineUpFillIcon = memo(function CaretLineUpFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M213.66,186.34A8,8,0,0,1,208,200H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0ZM48,80H208a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z" />
    </Svg>
  );
});
