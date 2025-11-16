import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextTThin = memo(function TextTThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M204,56V88a4,4,0,0,1-8,0V60H132V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,4-4H200A4,4,0,0,1,204,56Z" />
    </Svg>
  );
});
