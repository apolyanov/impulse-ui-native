import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChalkboardSimpleThinIcon = memo(function ChalkboardSimpleThin(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,196H228V168a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v28H36V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v80a4,4,0,0,0,8,0V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Zm-76-24h56v24H164Z" />
    </Svg>
  );
});
