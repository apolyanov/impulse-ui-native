import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FigmaLogoFill = memo(function FigmaLogoFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm-64,56H96a24,24,0,0,1,0-48h32Zm40-64H144V40h24a24,24,0,0,1,0,48Z" />
    </Svg>
  );
});
