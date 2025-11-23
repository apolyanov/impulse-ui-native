import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ClubFillIcon = memo(function ClubFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z" />
    </Svg>
  );
});
