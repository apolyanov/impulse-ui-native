import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignCenterVerticalSimpleDuotoneIcon = memo(
  function AlignCenterVerticalSimpleDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path
          d="M168,48V208a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h64A8,8,0,0,1,168,48Z"
          opacity={0.2}
        />
        <Path d="M208,120H176V48a16,16,0,0,0-16-16H96A16,16,0,0,0,80,48v72H48a8,8,0,0,0,0,16H80v72a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V136h32a8,8,0,0,0,0-16Zm-48,88H96V48h64Z" />
      </Svg>
    );
  }
);
