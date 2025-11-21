import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendUpRightDuotoneIcon = memo(
  function ArrowBendUpRightDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,104l-48,48V56Z" opacity={0.2} />
        <Path d="M229.66,98.34l-48-48A8,8,0,0,0,168,56V96H128A104.11,104.11,0,0,0,24,200a8,8,0,0,0,16,0,88.1,88.1,0,0,1,88-88h40v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104Z" />
      </Svg>
    );
  }
);
