import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ColumnsFill = memo(function ColumnsFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z" />
    </Svg>
  );
});
