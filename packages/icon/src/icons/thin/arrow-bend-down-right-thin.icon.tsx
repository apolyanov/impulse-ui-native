import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendDownRightThinIcon = memo(function ArrowBendDownRightThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M226.83,154.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,156H128A100.11,100.11,0,0,1,28,56a4,4,0,0,1,8,0,92.1,92.1,0,0,0,92,92h86.34l-41.17-41.17a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,154.83Z" />
    </Svg>
  );
});
