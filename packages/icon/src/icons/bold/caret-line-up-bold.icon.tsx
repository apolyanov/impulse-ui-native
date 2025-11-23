import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CaretLineUpBoldIcon = memo(function CaretLineUpBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216.49,183.51a12,12,0,0,1-17,17L128,129,56.49,200.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0ZM48,84H208a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Z" />
    </Svg>
  );
});
