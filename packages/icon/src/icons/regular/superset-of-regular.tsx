import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SupersetOfRegular = memo(function SupersetOfRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z" />
    </Svg>
  );
});
