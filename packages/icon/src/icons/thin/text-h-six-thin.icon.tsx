import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextHSixThinIcon = memo(function TextHSixThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M212,148a32.08,32.08,0,0,0-9.75,1.52l21.18-35.47a4,4,0,0,0-6.86-4.1l-32.25,54a.89.89,0,0,0-.08.17A32,32,0,1,0,212,148Zm0,56a24,24,0,1,1,24-24A24,24,0,0,1,212,204ZM148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0Z" />
    </Svg>
  );
});
