import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SigmaRegularIcon = memo(function SigmaRegular(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,72V56H80.65l53.6,67a8,8,0,0,1,0,10l-53.6,67H184V184a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H64a8,8,0,0,1-6.25-13l60-75-60-75A8,8,0,0,1,64,40H192a8,8,0,0,1,8,8V72a8,8,0,0,1-16,0Z" />
    </Svg>
  );
});
