import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FlagPennantBoldIcon = memo(function FlagPennantBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M243.94,92.67l-184-64A12,12,0,0,0,44,40V216a12,12,0,0,0,24,0V176.53l175.94-61.2a12,12,0,0,0,0-22.66ZM68,151.12V56.88L203.47,104Z" />
    </Svg>
  );
});
