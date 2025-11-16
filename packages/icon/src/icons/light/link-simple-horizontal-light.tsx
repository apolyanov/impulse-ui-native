import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const LinkSimpleHorizontalLight = memo(
  function LinkSimpleHorizontalLight(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M80,122h96a6,6,0,0,1,0,12H80a6,6,0,0,1,0-12Zm24,48H64a42,42,0,0,1,0-84h40a6,6,0,0,0,0-12H64a54,54,0,0,0,0,108h40a6,6,0,0,0,0-12Zm88-96H152a6,6,0,0,0,0,12h40a42,42,0,0,1,0,84H152a6,6,0,0,0,0,12h40a54,54,0,0,0,0-108Z" />
      </Svg>
    );
  },
);
