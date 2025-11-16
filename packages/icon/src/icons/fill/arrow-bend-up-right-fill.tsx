import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendUpRightFill = memo(function ArrowBendUpRightFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M229.66,109.66l-48,48A8,8,0,0,1,168,152V112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h40V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66Z" />
    </Svg>
  );
});
