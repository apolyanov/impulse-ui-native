import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowDownLeftFillIcon = memo(function ArrowElbowDownLeftFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,32V176a8,8,0,0,1-8,8H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,128v40h80V32a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
