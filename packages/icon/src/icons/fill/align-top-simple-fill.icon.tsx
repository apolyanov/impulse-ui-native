import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignTopSimpleFillIcon = memo(function AlignTopSimpleFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM160,56H96A16,16,0,0,0,80,72V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V72A16,16,0,0,0,160,56Z" />
    </Svg>
  );
});
