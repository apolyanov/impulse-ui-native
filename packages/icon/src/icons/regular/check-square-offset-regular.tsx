import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CheckSquareOffsetRegular = memo(function CheckSquareOffsetRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z" />
    </Svg>
  );
});
