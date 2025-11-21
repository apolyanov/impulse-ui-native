import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EscalatorUpRegularIcon = memo(function EscalatorUpRegular(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,40H168a8,8,0,0,0-5.88,2.57L68.5,144H32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H88a8,8,0,0,0,5.88-2.57L187.5,112H224a16,16,0,0,0,16-16V56A16,16,0,0,0,224,40Zm0,56H184a8,8,0,0,0-5.88,2.57L84.5,200H32V160H72a8,8,0,0,0,5.88-2.57L171.5,56H224Zm5.66,74.34a8,8,0,0,1-11.32,11.32L208,171.31V208a8,8,0,0,1-16,0V171.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z" />
    </Svg>
  );
});
