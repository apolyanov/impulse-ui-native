import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DivideRegular = memo(function DivideRegular(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16,16,0,0,0,128,176Z" />
    </Svg>
  );
});
