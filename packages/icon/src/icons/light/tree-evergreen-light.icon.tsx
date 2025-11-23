import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TreeEvergreenLightIcon = memo(function TreeEvergreenLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M228.74,188.32,180.27,126H208a6,6,0,0,0,4.76-9.66l-80-104a6,6,0,0,0-9.52,0l-80,104A6,6,0,0,0,48,126H75.73L27.26,188.32A6,6,0,0,0,32,198h90v42a6,6,0,0,0,12,0V198h90a6,6,0,0,0,4.74-9.68ZM44.27,186l48.47-62.32A6,6,0,0,0,88,114H60.19L128,25.84,195.81,114H168a6,6,0,0,0-4.74,9.68L211.73,186Z" />
    </Svg>
  );
});
