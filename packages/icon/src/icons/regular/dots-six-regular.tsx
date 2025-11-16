import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsSixRegular = memo(function DotsSixRegular(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z" />
    </Svg>
  );
});
