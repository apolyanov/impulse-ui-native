import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LifebuoyLightIcon = memo(function LifebuoyLight(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm36.47,130a45.87,45.87,0,0,0,0-56l31.24-31.23a89.81,89.81,0,0,1,0,118.44ZM94,128a34,34,0,1,1,34,34A34,34,0,0,1,94,128Zm93.22-67.71L156,91.53a45.87,45.87,0,0,0-56,0L68.78,60.29a89.81,89.81,0,0,1,118.44,0ZM60.29,68.78,91.53,100a45.87,45.87,0,0,0,0,56L60.29,187.22a89.81,89.81,0,0,1,0-118.44Zm8.49,126.93L100,164.47a45.87,45.87,0,0,0,56,0l31.23,31.24a89.81,89.81,0,0,1-118.44,0Z" />
    </Svg>
  );
});
