import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WaveSawtoothFill = memo(function WaveSawtoothFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-11.56,94.66-72,48A8,8,0,0,1,128,184a8,8,0,0,1-8-8V95L60.44,134.66a8,8,0,1,1-8.88-13.32l72-48A8,8,0,0,1,136,80v81.05l59.56-39.71a8,8,0,0,1,8.88,13.32Z" />
    </Svg>
  );
});
