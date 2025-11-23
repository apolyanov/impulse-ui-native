import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const RadicalBoldIcon = memo(function RadicalBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M252,80v24a12,12,0,0,1-24,0V92H136.32L91.24,212.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,128,68H240A12,12,0,0,1,252,80Z" />
    </Svg>
  );
});
