import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const FileArrowDownFill = memo(function FileArrowDownFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-56,83.32-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35a8,8,0,0,1,11.32,11.32ZM152,88V44l44,44Z" />
    </Svg>
  );
});
