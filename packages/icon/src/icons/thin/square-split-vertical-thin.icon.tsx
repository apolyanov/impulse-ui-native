import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareSplitVerticalThinIcon = memo(
  function SquareSplitVerticalThin(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM56,52H200a4,4,0,0,1,4,4v68H52V56A4,4,0,0,1,56,52ZM200,204H56a4,4,0,0,1-4-4V132H204v68A4,4,0,0,1,200,204Z" />
      </Svg>
    );
  }
);
