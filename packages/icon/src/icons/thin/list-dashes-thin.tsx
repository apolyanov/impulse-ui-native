import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListDashesThin = memo(function ListDashesThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M92,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm124,60H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM56,60H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
