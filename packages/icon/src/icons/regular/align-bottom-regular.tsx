import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignBottomRegular = memo(function AlignBottomRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-88-40V80a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v96a16,16,0,0,1-16,16H152A16,16,0,0,1,136,176Zm16,0h40V80H152ZM48,176V40A16,16,0,0,1,64,24h40a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H64A16,16,0,0,1,48,176Zm16,0h40V40H64Z" />
    </Svg>
  );
});
