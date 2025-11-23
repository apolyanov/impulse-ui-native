import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowSquareUpRightBoldIcon = memo(function ArrowSquareUpRightBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,168.49a12,12,0,0,1,0-17L131,108H112a12,12,0,0,1,0-24h48a12,12,0,0,1,12,12v48a12,12,0,0,1-24,0V125l-43.51,43.52a12,12,0,0,1-17,0Z" />
    </Svg>
  );
});
