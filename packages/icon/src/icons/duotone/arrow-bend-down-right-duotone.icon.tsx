import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendDownRightDuotoneIcon = memo(
  function ArrowBendDownRightDuotone(props: SvgProps) {
    return (
      <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,152l-48,48V104Z" opacity={0.2} />
        <Path d="M229.66,146.34l-48-48A8,8,0,0,0,168,104v40H128A88.1,88.1,0,0,1,40,56a8,8,0,0,0-16,0A104.11,104.11,0,0,0,128,160h40v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,146.34ZM184,180.69V123.31L212.69,152Z" />
      </Svg>
    );
  }
);
