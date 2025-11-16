import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SignInBold = memo(function SignInBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM200,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h64a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Z" />
    </Svg>
  );
});
