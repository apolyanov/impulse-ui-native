import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendRightUpThin = memo(function ArrowBendRightUpThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M202.83,82.83a4,4,0,0,1-5.66,0L156,41.66V128A100.11,100.11,0,0,1,56,228a4,4,0,0,1,0-8,92.1,92.1,0,0,0,92-92V41.66L106.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,202.83,82.83Z" />
    </Svg>
  );
});
