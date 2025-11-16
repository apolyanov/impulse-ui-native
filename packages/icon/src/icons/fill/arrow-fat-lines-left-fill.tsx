import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatLinesLeftFill = memo(function ArrowFatLinesLeftFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M160,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h24A8,8,0,0,1,160,80Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,184,72Zm32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Z" />
    </Svg>
  );
});
