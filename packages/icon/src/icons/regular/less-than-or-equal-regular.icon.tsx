import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LessThanOrEqualRegularIcon = memo(function LessThanOrEqualRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M40,104a8,8,0,0,1,5.23-7.5l152-56a8,8,0,0,1,5.53,15L71.14,104l131.62,48.49A8,8,0,0,1,200,168a8.13,8.13,0,0,1-2.77-.49l-152-56A8,8,0,0,1,40,104Zm160,88H48a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
