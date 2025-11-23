import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CrossRegularIcon = memo(function CrossRegular(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H152a8,8,0,0,0-8,8v96H112V128a8,8,0,0,0-8-8H56V88h48a8,8,0,0,0,8-8V32h32V80a8,8,0,0,0,8,8h48Z" />
    </Svg>
  );
});
