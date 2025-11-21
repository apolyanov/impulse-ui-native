import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SuitcaseSimpleLightIcon = memo(function SuitcaseSimpleLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94ZM40,70H216a2,2,0,0,1,2,2v74H38V72A2,2,0,0,1,40,70ZM216,202H40a2,2,0,0,1-2-2V158H218v42A2,2,0,0,1,216,202Z" />
    </Svg>
  );
});
