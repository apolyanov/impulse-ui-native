import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AppWindowBold = memo(function AppWindowBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM60,92a16,16,0,1,1,16,16A16,16,0,0,1,60,92Zm48,0a16,16,0,1,1,16,16A16,16,0,0,1,108,92Z" />
    </Svg>
  );
});
