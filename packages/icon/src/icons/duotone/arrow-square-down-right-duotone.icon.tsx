import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowSquareDownRightDuotoneIcon = memo(
  function ArrowSquareDownRightDuotone(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path
          d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
          opacity={0.2}
        />
        <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM90.34,101.66a8,8,0,0,1,11.32-11.32L152,140.69V112a8,8,0,0,1,16,0v48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h28.69Z" />
      </Svg>
    );
  }
);
