import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChartScatterFillIcon = memo(function ChartScatterFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM188,72a12,12,0,1,1-12,12A12,12,0,0,1,188,72Zm0,56a12,12,0,1,1-12,12A12,12,0,0,1,188,128Zm-40-16a12,12,0,1,1-12,12A12,12,0,0,1,148,112ZM124,72a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm-24,56a12,12,0,1,1-12,12A12,12,0,0,1,100,128Zm100,64H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
