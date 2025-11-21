import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AngleThinIcon = memo(function AngleThin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M100,72a4,4,0,0,1,4-4A100.11,100.11,0,0,1,204,168a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92A4,4,0,0,1,100,72ZM240,196H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68V200a4,4,0,0,0,4,4H240a4,4,0,0,0,0-8Z" />
    </Svg>
  );
});
