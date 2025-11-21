import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowULeftDownRegularIcon = memo(function ArrowULeftDownRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0V204.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,204.69V88a64,64,0,0,1,128,0Z" />
    </Svg>
  );
});
