import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CheckSquareBold = memo(function CheckSquareBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0ZM228,48V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48Zm-24,4H52V204H204Z" />
    </Svg>
  );
});
