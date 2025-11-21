import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowULeftUpBoldIcon = memo(function ArrowULeftUpBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,80v88a68,68,0,0,1-136,0V61L48.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L100,61V168a44,44,0,0,0,88,0V80a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
