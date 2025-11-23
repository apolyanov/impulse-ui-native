import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TaxiFillIcon = memo(function TaxiFill(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240,104H228.64L201.25,56.06A16,16,0,0,0,187.36,48H165.42l-12-29.94A15.93,15.93,0,0,0,138.58,8H117.42a15.93,15.93,0,0,0-14.86,10.06L90.58,48H68.64a16,16,0,0,0-13.89,8.06L27.36,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM45.79,104,68.64,64H187.36l22.85,40Z" />
    </Svg>
  );
});
