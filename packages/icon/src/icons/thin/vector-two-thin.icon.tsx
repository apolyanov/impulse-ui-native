import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VectorTwoThinIcon = memo(function VectorTwoThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M226.83,194.83l-32,32a4,4,0,0,1-5.66-5.66L214.34,196H80a4,4,0,0,1-4-4V49.66L50.83,74.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L84,49.66V188H214.34l-25.17-25.17a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,226.83,194.83Z" />
    </Svg>
  );
});
