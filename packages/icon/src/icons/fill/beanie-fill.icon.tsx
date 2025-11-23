import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BeanieFillIcon = memo(function BeanieFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM120,176v32H80V176Zm16,0h40v32H136ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36ZM40,176H64v32H40Zm176,32H192V176h24v32Z" />
    </Svg>
  );
});
