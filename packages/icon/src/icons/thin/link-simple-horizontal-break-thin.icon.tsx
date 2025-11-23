import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LinkSimpleHorizontalBreakThinIcon = memo(
  function LinkSimpleHorizontalBreakThin(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M20,128a44.05,44.05,0,0,0,44,44h40a4,4,0,0,1,0,8H64A52,52,0,0,1,64,76h40a4,4,0,0,1,0,8H64A44.05,44.05,0,0,0,20,128ZM192,76H152a4,4,0,0,0,0,8h40a44,44,0,0,1,0,88H152a4,4,0,0,0,0,8h40a52,52,0,0,0,0-104Z" />
      </Svg>
    );
  }
);
