import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SlideshowDuotone = memo(function SlideshowDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M200,64V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H192A8,8,0,0,1,200,64Z"
        opacity={0.2}
      />
      <Path d="M192,48H64A16,16,0,0,0,48,64V192a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48Zm0,144H64V64H192V192ZM240,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM32,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
