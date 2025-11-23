import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TagChevronFillIcon = memo(function TagChevronFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M246.66,132.44,201,200.88A16,16,0,0,1,187.72,208H32a8,8,0,0,1-6.66-12.44L70.39,128l-45-67.56A8,8,0,0,1,32,48H187.72A16,16,0,0,1,201,55.12l45.63,68.44A8,8,0,0,1,246.66,132.44Z" />
    </Svg>
  );
});
