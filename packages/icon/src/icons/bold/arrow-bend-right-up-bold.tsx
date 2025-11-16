import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendRightUpBold = memo(function ArrowBendRightUpBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208.49,88.49a12,12,0,0,1-17,0L164,61v67A108.12,108.12,0,0,1,56,236a12,12,0,0,1,0-24,84.09,84.09,0,0,0,84-84V61L112.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,208.49,88.49Z" />
    </Svg>
  );
});
