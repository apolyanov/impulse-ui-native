import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArchiveBold = memo(function ArchiveBold(props: SvgProps) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M224,44H32A20,20,0,0,0,12,64V88a20,20,0,0,0,16,19.6V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V107.6A20,20,0,0,0,244,88V64A20,20,0,0,0,224,44ZM36,68H220V84H36ZM52,188V108H204v80Zm112-52a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,136Z" />
    </Svg>
  );
});
