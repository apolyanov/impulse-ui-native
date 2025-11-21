import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ChalkboardSimpleDuotoneIcon = memo(
  function ChalkboardSimpleDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path
          d="M224,56V168H160v32H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
          opacity={0.2}
        />
        <Path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z" />
      </Svg>
    );
  }
);
