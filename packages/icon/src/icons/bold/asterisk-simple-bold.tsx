import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AsteriskSimpleBold = memo(function AsteriskSimpleBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212.45,107.14l-65.19,26.08,46.21,59.41a12,12,0,1,1-18.94,14.74L128,147.55,81.47,207.37a12,12,0,0,1-18.94-14.74l46.21-59.41L43.55,107.14a12,12,0,1,1,8.91-22.28L116,110.28V40a12,12,0,0,1,24,0v70.28l63.54-25.42a12,12,0,1,1,8.91,22.28Z" />
    </Svg>
  );
});
