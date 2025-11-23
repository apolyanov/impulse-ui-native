import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyJpyThinIcon = memo(function CurrencyJpyThin(
  props: SvgProps
) {
  return (
    <Svg {...props} viewBox="0 0 256 256" fill={props.color}>
      <Path d="M203.1,50.53,136.44,132H176a4,4,0,0,1,0,8H132v24h44a4,4,0,0,1,0,8H132v44a4,4,0,0,1-8,0V172H80a4,4,0,0,1,0-8h44V140H80a4,4,0,0,1,0-8h39.56L52.9,50.53a4,4,0,0,1,6.2-5.06L128,129.68l68.9-84.21a4,4,0,1,1,6.2,5.06Z" />
    </Svg>
  );
});
