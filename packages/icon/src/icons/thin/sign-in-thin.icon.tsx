import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SignInThinIcon = memo(function SignInThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM200,36H136a4,4,0,0,0,0,8h60V212H136a4,4,0,0,0,0,8h64a4,4,0,0,0,4-4V40A4,4,0,0,0,200,36Z" />
    </Svg>
  );
});
