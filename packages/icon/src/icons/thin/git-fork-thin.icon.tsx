import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const GitForkThinIcon = memo(function GitForkThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M220,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V91.71a28,28,0,1,0-8,0V112a20,20,0,0,0,20,20h44v32.29a28,28,0,1,0,8,0V132h44a20,20,0,0,0,20-20V91.71A28,28,0,0,0,220,64ZM44,64A20,20,0,1,1,64,84,20,20,0,0,1,44,64ZM148,192a20,20,0,1,1-20-20A20,20,0,0,1,148,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z" />
    </Svg>
  );
});
