import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeviceMobileSlashFillIcon = memo(function DeviceMobileSlashFill(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-2.26-2.48A24,24,0,0,1,176,240H80a24,24,0,0,1-24-24V60.69L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-27.3-65.71A8,8,0,0,0,200,150.83V40a24,24,0,0,0-24-24H76.7a8,8,0,0,0-5.92,13.38Z" />
    </Svg>
  );
});
