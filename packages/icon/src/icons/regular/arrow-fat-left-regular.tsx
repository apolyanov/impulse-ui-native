import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatLeftRegular = memo(function ArrowFatLeftRegular(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z" />
    </Svg>
  );
});
