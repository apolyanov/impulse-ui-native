import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FlagPennantDuotone = memo(function FlagPennantDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,104,56,168V40Z" opacity={0.2} />
      <Path d="M242.63,96.44l-184-64A8,8,0,0,0,48,40V216a8,8,0,0,0,16,0V173.69l178.63-62.13a8,8,0,0,0,0-15.12ZM64,156.75V51.25L215.65,104Z" />
    </Svg>
  );
});
