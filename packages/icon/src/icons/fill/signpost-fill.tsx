import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SignpostFill = memo(function SignpostFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M246,117.35,212.33,154.7a16,16,0,0,1-11.89,5.3H136v64a8,8,0,0,1-16,0V160H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64h80V32a8,8,0,0,1,16,0V64h64.44a16,16,0,0,1,11.89,5.3L246,106.65A8,8,0,0,1,246,117.35Z" />
    </Svg>
  );
});
