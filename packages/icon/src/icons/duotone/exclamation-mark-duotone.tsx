import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ExclamationMarkDuotone = memo(function ExclamationMarkDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z"
        opacity={0.2}
      />
      <Path d="M144,200a16,16,0,1,1-16-16A16,16,0,0,1,144,200Zm-16-40a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V152A8,8,0,0,0,128,160Z" />
    </Svg>
  );
});
