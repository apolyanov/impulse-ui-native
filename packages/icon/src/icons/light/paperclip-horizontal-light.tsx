import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PaperclipHorizontalLight = memo(function PaperclipHorizontalLight(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M246,128a54.06,54.06,0,0,1-54,54H48a38,38,0,0,1,0-76H192a22,22,0,0,1,0,44H80a6,6,0,0,1,0-12H192a10,10,0,0,0,0-20H48a26,26,0,0,0,0,52H192a42,42,0,0,0,0-84H80a6,6,0,0,1,0-12H192A54.06,54.06,0,0,1,246,128Z" />
    </Svg>
  );
});
