import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeviceTabletCameraFill = memo(function DeviceTabletCameraFill(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z" />
    </Svg>
  );
});
