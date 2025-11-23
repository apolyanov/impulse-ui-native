import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendLeftDownThinIcon = memo(function ArrowBendLeftDownThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,32a4,4,0,0,1-4,4,92.1,92.1,0,0,0-92,92v86.34l41.17-41.17a4,4,0,0,1,5.66,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L100,214.34V128A100.11,100.11,0,0,1,200,28,4,4,0,0,1,204,32Z" />
    </Svg>
  );
});
