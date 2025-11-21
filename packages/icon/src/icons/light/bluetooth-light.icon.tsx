import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const BluetoothLightIcon = memo(function BluetoothLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M195.6,171.2,138,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,122,32v84L67.6,75.2a6,6,0,0,0-7.2,9.6L118,128,60.4,171.2a6,6,0,1,0,7.2,9.6L122,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM134,44l48,36-48,36Zm0,168V140l48,36Z" />
    </Svg>
  );
});
