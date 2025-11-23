import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const AlignCenterVerticalSimpleRegularIcon = memo(
  function AlignCenterVerticalSimpleRegular(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M208,120H176V48a16,16,0,0,0-16-16H96A16,16,0,0,0,80,48v72H48a8,8,0,0,0,0,16H80v72a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V136h32a8,8,0,0,0,0-16Zm-48,88H96V48h64Z" />
      </Svg>
    );
  }
);
