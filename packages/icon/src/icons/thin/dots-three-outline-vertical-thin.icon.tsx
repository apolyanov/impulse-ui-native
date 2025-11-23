import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const DotsThreeOutlineVerticalThinIcon = memo(
  function DotsThreeOutlineVerticalThin(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm0-72a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,28Zm0,152a28,28,0,1,0,28,28A28,28,0,0,0,128,180Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,228Z" />
      </Svg>
    );
  }
);
