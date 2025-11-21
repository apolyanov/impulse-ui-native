import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SlideshowBoldIcon = memo(function SlideshowBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,44H72A20,20,0,0,0,52,64V192a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V64A20,20,0,0,0,184,44Zm-4,144H76V68H180ZM244,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM36,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
