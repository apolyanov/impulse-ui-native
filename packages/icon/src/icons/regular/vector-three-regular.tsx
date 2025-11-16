import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const VectorThreeRegular = memo(function VectorThreeRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M237.66,141.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,144H123.31l-56,56H96a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v28.69l56-56V43.31L93.66,61.66A8,8,0,0,1,82.34,50.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,43.31V128h84.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,141.66Z" />
    </Svg>
  );
});
