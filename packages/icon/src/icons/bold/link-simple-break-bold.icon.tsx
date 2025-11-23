import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LinkSimpleBreakBoldIcon = memo(function LinkSimpleBreakBold(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M218.45,122.43l-30.08,30.06a12,12,0,0,1-17-17l30.08-30.07a36,36,0,0,0-50.93-50.92L120.48,84.59a12,12,0,0,1-17-17l30.07-30.06a60,60,0,0,1,84.87,84.88Zm-82.93,49-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z" />
    </Svg>
  );
});
