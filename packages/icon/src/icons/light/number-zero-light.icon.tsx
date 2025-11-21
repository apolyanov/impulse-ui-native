import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const NumberZeroLightIcon = memo(function NumberZeroLight(
  props: SvgProps
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path d="M181.56,64.28C169,44.47,150.43,34,128,34S87.05,44.47,74.44,64.28C63.84,80.94,58,103.57,58,128s5.84,47.06,16.44,63.72C87.05,211.53,105.57,222,128,222s40.95-10.47,53.56-30.28C192.16,175.06,198,152.43,198,128S192.16,80.94,181.56,64.28ZM128,210c-40.07,0-58-41.18-58-82s17.93-82,58-82,58,41.18,58,82S168.07,210,128,210Z" />
    </Svg>
  );
});
