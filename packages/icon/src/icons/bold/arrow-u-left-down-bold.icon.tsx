import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowULeftDownBoldIcon = memo(function ArrowULeftDownBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,88v88a12,12,0,0,1-24,0V88a44,44,0,0,0-88,0V195l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L76,195V88a68,68,0,0,1,136,0Z" />
    </Svg>
  );
});
