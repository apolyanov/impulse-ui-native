import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MapPinSimpleFill = memo(function MapPinSimpleFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M136,127.42V232a8,8,0,0,1-16,0V127.42a56,56,0,1,1,16,0Z" />
    </Svg>
  );
});
