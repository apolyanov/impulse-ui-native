import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatDownBoldIcon = memo(function ArrowFatDownBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M235.09,131.41A12,12,0,0,0,224,124H188V48a20,20,0,0,0-20-20H88A20,20,0,0,0,68,48v76H32a12,12,0,0,0-8.48,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12V52h72v84a12,12,0,0,0,12,12h19Z" />
    </Svg>
  );
});
