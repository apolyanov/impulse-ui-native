import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SubtractSquareFill = memo(function SubtractSquareFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,48H152V152H48Z" />
    </Svg>
  );
});
