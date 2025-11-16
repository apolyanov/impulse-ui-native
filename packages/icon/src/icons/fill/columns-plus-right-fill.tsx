import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ColumnsPlusRightFill = memo(function ColumnsPlusRightFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M96,48V208a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H80A16,16,0,0,1,96,48Zm56-16H128a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,152,32Zm88,88H224V104a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V136h16a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
