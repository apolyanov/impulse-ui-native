import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const TextHFourThinIcon = memo(function TextHFourThin(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0ZM252,184a4,4,0,0,1-4,4H236v20a4,4,0,0,1-8,0V188H176a4,4,0,0,1-3.16-6.46l56-72A4,4,0,0,1,236,112v68h12A4,4,0,0,1,252,184Zm-24-60.34L184.18,180H228Z" />
    </Svg>
  );
});
