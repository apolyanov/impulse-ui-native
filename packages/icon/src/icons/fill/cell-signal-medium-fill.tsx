import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalMediumFill = memo(function CellSignalMediumFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H128V104l64-64Z" />
    </Svg>
  );
});
