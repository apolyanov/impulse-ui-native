import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const UserCheckFill = memo(function UserCheckFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M253.66,133.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z" />
    </Svg>
  );
});
