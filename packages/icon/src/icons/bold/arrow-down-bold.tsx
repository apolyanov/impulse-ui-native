import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowDownBold = memo(function ArrowDownBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z" />
    </Svg>
  );
});
