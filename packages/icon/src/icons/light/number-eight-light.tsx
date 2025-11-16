import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberEightLight = memo(function NumberEightLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M151.62,119.45a46,46,0,1,0-47.24,0,54,54,0,1,0,47.24,0ZM94,80a34,34,0,1,1,34,34A34,34,0,0,1,94,80Zm34,130a42,42,0,1,1,42-42A42,42,0,0,1,128,210Z" />
    </Svg>
  );
});
