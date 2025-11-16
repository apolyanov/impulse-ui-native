import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const SquareHalfBottomBold = memo(function SquareHalfBottomBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,24v56H60V60Zm-80,80v56H100V140Zm24,0h16v56H140Zm-80,0H76v56H60Zm120,56V140h16v56Z" />
    </Svg>
  );
});
