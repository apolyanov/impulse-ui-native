import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowDownLeftDuotoneIcon = memo(function ArrowDownLeftDuotone(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M168,192H64V88Z" opacity={0.2} />
      <Path d="M197.66,58.34a8,8,0,0,0-11.32,0L116,128.69,69.66,82.34A8,8,0,0,0,56,88V192a8,8,0,0,0,8,8H168a8,8,0,0,0,5.66-13.66L127.31,140l70.35-70.34A8,8,0,0,0,197.66,58.34ZM72,184V107.31l38.34,38.34h0L148.69,184Z" />
    </Svg>
  );
});
