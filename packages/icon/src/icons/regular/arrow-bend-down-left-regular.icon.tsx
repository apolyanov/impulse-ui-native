import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const ArrowBendDownLeftRegularIcon = memo(
  function ArrowBendDownLeftRegular(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M232,56A104.11,104.11,0,0,1,128,160H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,11.32L51.31,144H128a88.1,88.1,0,0,0,88-88,8,8,0,0,1,16,0Z" />
      </Svg>
    );
  }
);
