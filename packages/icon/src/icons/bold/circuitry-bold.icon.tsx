import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CircuitryBoldIcon = memo(function CircuitryBold(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM52,52H76v95.22a24,24,0,1,0,24,0V125l40,40v39H52ZM204,204H164V160a12,12,0,0,0-3.51-8.49L100,91V52h24V72a12,12,0,0,0,3.51,8.49l17.31,17.3a24,24,0,1,0,17-17L148,67V52h56Z" />
    </Svg>
  );
});
