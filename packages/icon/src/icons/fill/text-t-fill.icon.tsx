import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextTFillIcon = memo(function TextTFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" />
    </Svg>
  );
});
