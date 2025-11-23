import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const OptionRegularIcon = memo(function OptionRegular(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M232,192a8,8,0,0,1-8,8H160.94a15.92,15.92,0,0,1-14.31-8.84L95.06,88H32a8,8,0,0,1,0-16H95.06a15.92,15.92,0,0,1,14.31,8.84L160.94,184H224A8,8,0,0,1,232,192ZM152,88h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z" />
    </Svg>
  );
});
