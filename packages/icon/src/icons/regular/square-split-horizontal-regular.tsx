import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareSplitHorizontalRegular = memo(
  function SquareSplitHorizontalRegular(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z" />
      </Svg>
    );
  },
);
