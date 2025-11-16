import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CirclesThreePlusFill = memo(function CirclesThreePlusFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm128,32H184V144a8,8,0,0,0-16,0v24H144a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V184h24a8,8,0,0,0,0-16Z" />
    </Svg>
  );
});
