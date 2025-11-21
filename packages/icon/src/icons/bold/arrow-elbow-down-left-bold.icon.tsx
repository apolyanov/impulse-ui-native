import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowElbowDownLeftBoldIcon = memo(function ArrowElbowDownLeftBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,32V176a12,12,0,0,1-12,12H77l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L77,164H180V32a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
