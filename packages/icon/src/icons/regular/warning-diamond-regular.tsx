import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WarningDiamondRegular = memo(function WarningDiamondRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,72a8,8,0,0,1,8,8v56a8,8,0,0,1-16,0V80A8,8,0,0,1,128,72ZM116,172a12,12,0,1,0,12-12A12,12,0,0,0,116,172Zm124-44a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Zm-16,0L128,32,32,128,128,224h0Z" />
    </Svg>
  );
});
