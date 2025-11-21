import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChalkboardSimpleBoldIcon = memo(function ChalkboardSimpleBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,188h-4V160a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12v28H44V60H212v60a12,12,0,0,0,24,0V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Zm-68-16h40v16H172Z" />
    </Svg>
  );
});
