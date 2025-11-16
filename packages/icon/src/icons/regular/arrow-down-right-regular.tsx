import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowDownRightRegular = memo(function ArrowDownRightRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.69L58.34,69.66A8,8,0,0,1,69.66,58.34L184,172.69V88a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
