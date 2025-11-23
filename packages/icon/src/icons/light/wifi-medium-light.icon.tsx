import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const WifiMediumLightIcon = memo(function WifiMediumLight(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Zm65.73-79.66a122,122,0,0,0-151.46,0,6,6,0,0,0,7.46,9.41,110,110,0,0,1,136.54,0A6,6,0,0,0,200,135a6,6,0,0,0,3.73-10.7Zm-32.2,35.81a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Z" />
    </Svg>
  );
});
