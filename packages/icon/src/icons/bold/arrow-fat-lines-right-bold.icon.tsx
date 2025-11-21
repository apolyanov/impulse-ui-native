import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowFatLinesRightBoldIcon = memo(function ArrowFatLinesRightBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68h-4a12,12,0,0,0-12,12v96a12,12,0,0,0,12,12h4v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12h-4V92h4a12,12,0,0,0,12-12V61l67,67ZM52,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z" />
    </Svg>
  );
});
