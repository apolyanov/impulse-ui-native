import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowUpRightLight = memo(function ArrowElbowUpRightLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L201.51,86H78V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H201.51L163.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,220.24,84.24Z" />
    </Svg>
  );
});
