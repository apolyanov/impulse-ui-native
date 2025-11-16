import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MapPinSimpleThin = memo(function MapPinSimpleThin(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M180,72a52,52,0,1,0-56,51.83V232a4,4,0,0,0,8,0V123.83A52.05,52.05,0,0,0,180,72Zm-52,44a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,116Z" />
    </Svg>
  );
});
