import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextHBold = memo(function TextHBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,56V200a12,12,0,0,1-24,0V140H68v60a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v60H188V56a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
