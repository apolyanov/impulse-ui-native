import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CellSignalNoneRegularIcon = memo(function CellSignalNoneRegular(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z" />
    </Svg>
  );
});
