import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MapPinSimpleDuotone = memo(function MapPinSimpleDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,72a48,48,0,1,1-48-48A48,48,0,0,1,176,72Z" opacity={0.2} />
      <Path d="M184,72a56,56,0,1,0-64,55.42V232a8,8,0,0,0,16,0V127.42A56.09,56.09,0,0,0,184,72Zm-56,40a40,40,0,1,1,40-40A40,40,0,0,1,128,112Z" />
    </Svg>
  );
});
