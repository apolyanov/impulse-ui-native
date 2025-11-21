import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WalletLightIcon = memo(function WalletLight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M216,66H56a10,10,0,0,1,0-20H192a6,6,0,0,0,0-12H56A22,22,0,0,0,34,56V184a22,22,0,0,0,22,22H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66Zm2,126a2,2,0,0,1-2,2H56a10,10,0,0,1-10-10V75.59A21.84,21.84,0,0,0,56,78H216a2,2,0,0,1,2,2Zm-28-60a10,10,0,1,1-10-10A10,10,0,0,1,190,132Z" />
    </Svg>
  );
});
