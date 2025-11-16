import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const HighDefinitionDuotone = memo(function HighDefinitionDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,48V208H32V48Z" opacity={0.2} />
      <Path d="M176,72H152a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h24a56,56,0,0,0,0-112Zm0,96H160V88h16a40,40,0,0,1,0,80Zm-64,8V136H56v40a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v40h56V80a8,8,0,0,1,16,0v96a8,8,0,0,1-16,0ZM24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
    </Svg>
  );
});
