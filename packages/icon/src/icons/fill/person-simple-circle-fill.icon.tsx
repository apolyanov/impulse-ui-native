import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const PersonSimpleCircleFillIcon = memo(function PersonSimpleCircleFill(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,40a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm48,56H136v13.58l30.66,46a8,8,0,0,1-13.32,8.88l-25.34-38-25.34,38a8,8,0,1,1-13.32-8.88l30.66-46V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
    </Svg>
  );
});
