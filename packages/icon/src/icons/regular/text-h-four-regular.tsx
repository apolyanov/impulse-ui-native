import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextHFourRegular = memo(function TextHFourRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0ZM256,184a8,8,0,0,1-8,8h-8v16a8,8,0,0,1-16,0V192H176a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,240,112v64h8A8,8,0,0,1,256,184Zm-32-48.68L192.36,176H224Z" />
    </Svg>
  );
});
