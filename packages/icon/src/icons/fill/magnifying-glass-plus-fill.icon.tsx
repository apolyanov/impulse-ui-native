import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MagnifyingGlassPlusFillIcon = memo(
  function MagnifyingGlassPlusFill(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" />
      </Svg>
    );
  }
);
