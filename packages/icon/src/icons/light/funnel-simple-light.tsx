import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FunnelSimpleLight = memo(function FunnelSimpleLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M198,136a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H192A6,6,0,0,1,198,136Zm34-54H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm-80,96H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z" />
    </Svg>
  );
});
