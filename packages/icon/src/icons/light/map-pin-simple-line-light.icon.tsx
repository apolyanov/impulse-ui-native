import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MapPinSimpleLineLightIcon = memo(function MapPinSimpleLineLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,210H134V133.66a54,54,0,1,0-12,0V210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM86,80a42,42,0,1,1,42,42A42,42,0,0,1,86,80Z" />
    </Svg>
  );
});
