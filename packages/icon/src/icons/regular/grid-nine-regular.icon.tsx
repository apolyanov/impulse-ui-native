import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GridNineRegularIcon = memo(function GridNineRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM104,144V112h48v32Zm48,16v32H104V160ZM40,112H88v32H40Zm64-16V64h48V96Zm64,16h48v32H168Zm48-16H168V64h48ZM88,64V96H40V64ZM40,160H88v32H40Zm176,32H168V160h48v32Z" />
    </Svg>
  );
});
