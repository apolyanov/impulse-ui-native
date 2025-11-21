import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DeviceTabletBoldIcon = memo(function DeviceTabletBold(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M192,20H64A28,28,0,0,0,36,48V208a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V48A28,28,0,0,0,192,20ZM60,84H196v88H60Zm4-40H192a4,4,0,0,1,4,4V60H60V48A4,4,0,0,1,64,44ZM192,212H64a4,4,0,0,1-4-4V196H196v12A4,4,0,0,1,192,212Z" />
    </Svg>
  );
});
