import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatUpFill = memo(function ArrowFatUpFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M231.39,123.06A8,8,0,0,1,224,128H184v80a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06Z" />
    </Svg>
  );
});
