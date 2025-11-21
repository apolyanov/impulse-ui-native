import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SlideshowFillIcon = memo(function SlideshowFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,64V192a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192A16,16,0,0,1,208,64Zm24-16a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,232,48ZM24,48a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,24,48Z" />
    </Svg>
  );
});
