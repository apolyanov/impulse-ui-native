import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatLineRightDuotone = memo(function ArrowFatLineRightDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M136,224V176H72V80h64V32l96,96Z" opacity={0.2} />
      <Path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H80V88h56a8,8,0,0,0,8-8V51.31L220.69,128ZM48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
