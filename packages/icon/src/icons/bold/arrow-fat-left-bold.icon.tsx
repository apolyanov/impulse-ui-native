import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatLeftBoldIcon = memo(function ArrowFatLeftBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,68H132V32a12,12,0,0,0-20.49-8.48l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h76a20,20,0,0,0,20-20V88A20,20,0,0,0,208,68Zm-4,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h84Z" />
    </Svg>
  );
});
