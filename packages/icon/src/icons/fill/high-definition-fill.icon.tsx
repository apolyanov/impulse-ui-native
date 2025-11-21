import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HighDefinitionFillIcon = memo(function HighDefinitionFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M196,128a32,32,0,0,1-32,32H152V96h12A32,32,0,0,1,196,128Zm36-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,88a8,8,0,0,0-16,0v32H64V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V136h40v32a8,8,0,0,0,16,0Zm92,40a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h20A48.05,48.05,0,0,0,212,128Z" />
    </Svg>
  );
});
