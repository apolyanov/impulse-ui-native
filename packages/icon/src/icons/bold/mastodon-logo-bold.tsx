import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const MastodonLogoBold = memo(function MastodonLogoBold(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M184,28H72A44.05,44.05,0,0,0,28,72V192a44.05,44.05,0,0,0,44,44h88a12,12,0,0,0,0-24H72a20,20,0,0,1-20-20v-4H184a44.05,44.05,0,0,0,44-44V72A44.05,44.05,0,0,0,184,28Zm20,116a20,20,0,0,1-20,20H52V72A20,20,0,0,1,72,52H184a20,20,0,0,1,20,20Zm-16-40v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a12,12,0,0,0-24,0v32a12,12,0,0,1-24,0V104a36,36,0,0,1,60-26.8A36,36,0,0,1,188,104Z" />
    </Svg>
  );
});
