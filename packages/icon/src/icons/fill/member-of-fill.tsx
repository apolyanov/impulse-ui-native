import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MemberOfFill = memo(function MemberOfFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,88a8,8,0,0,1,0,16H80.68A48.07,48.07,0,0,0,128,176h48a8,8,0,0,1,0,16H128a64,64,0,0,1,0-128h48a8,8,0,0,1,0,16H128a48.07,48.07,0,0,0-47.32,40Z" />
    </Svg>
  );
});
