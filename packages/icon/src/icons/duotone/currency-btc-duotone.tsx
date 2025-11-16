import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const CurrencyBtcDuotone = memo(function CurrencyBtcDuotone(
  props: SvgProps,
) {
  return (
    <Svg viewBox="0 0 256 256" fill={props.color}>
      <Path
        d="M200,160a40,40,0,0,1-40,40H88V48h60a36,36,0,0,1,0,72h12A40,40,0,0,1,200,160Z"
        opacity={0.2}
      />
      <Path d="M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM96,56h52a28,28,0,0,1,0,56H96Zm64,136H96V128h64a32,32,0,0,1,0,64Z" />
    </Svg>
  );
});
