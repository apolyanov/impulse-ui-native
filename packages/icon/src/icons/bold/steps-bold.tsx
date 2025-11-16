import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const StepsBold = memo(function StepsBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M252,56a12,12,0,0,1-12,12H196v36a12,12,0,0,1-12,12H140v36a12,12,0,0,1-12,12H84v36a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H60V152a12,12,0,0,1,12-12h44V104a12,12,0,0,1,12-12h44V56a12,12,0,0,1,12-12h56A12,12,0,0,1,252,56Z" />
    </Svg>
  );
});
