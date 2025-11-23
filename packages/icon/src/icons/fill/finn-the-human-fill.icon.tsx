import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FinnTheHumanFillIcon = memo(function FinnTheHumanFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136ZM240,72v80a72.08,72.08,0,0,1-72,72H88a72.08,72.08,0,0,1-72-72V72a32,32,0,0,1,63-8h98a32,32,0,0,1,63,8Zm-40,72a32,32,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32,32,0,0,0,32,32h80a32,32,0,0,0,32-32Z" />
    </Svg>
  );
});
