import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowSquareDownBoldIcon = memo(function ArrowSquareDownBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,144.49a12,12,0,1,1,17-17L116,139V88a12,12,0,0,1,24,0v51l11.51-11.52a12,12,0,1,1,17,17l-32,32a12,12,0,0,1-17,0Z" />
    </Svg>
  );
});
