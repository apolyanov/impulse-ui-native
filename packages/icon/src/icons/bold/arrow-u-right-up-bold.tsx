import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowURightUpBold = memo(function ArrowURightUpBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224.49,88.49a12,12,0,0,1-17,0L180,61V168a68,68,0,0,1-136,0V80a12,12,0,0,1,24,0v88a44,44,0,0,0,88,0V61L128.49,88.49a12,12,0,1,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,224.49,88.49Z" />
    </Svg>
  );
});
