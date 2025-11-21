import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowDownRightDuotoneIcon = memo(function ArrowDownRightDuotone(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,88V192H88Z" opacity={0.2} />
      <Path d="M195.06,80.61a8,8,0,0,0-8.72,1.73L140,128.69,69.66,58.34A8,8,0,0,0,58.34,69.66L128.69,140,82.34,186.34A8,8,0,0,0,88,200H192a8,8,0,0,0,8-8V88A8,8,0,0,0,195.06,80.61ZM184,184H107.31l38.34-38.34h0L184,107.31Z" />
    </Svg>
  );
});
