import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ListPlusThin = memo(function ListPlusThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm104,56H40a4,4,0,0,0,0,8H144a4,4,0,0,0,0-8Zm88,0H212V168a4,4,0,0,0-8,0v20H184a4,4,0,0,0,0,8h20v20a4,4,0,0,0,8,0V196h20a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
