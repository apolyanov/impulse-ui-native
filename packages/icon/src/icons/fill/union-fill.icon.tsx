import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UnionFillIcon = memo(function UnionFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136a56,56,0,0,1-112,0V80a8,8,0,0,1,16,0v56a40,40,0,0,0,80,0V80a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
