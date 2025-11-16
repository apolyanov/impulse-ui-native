import { memo } from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export const EnvelopeSimpleOpenDuotone = memo(
  function EnvelopeSimpleOpenDuotone(props: SvgProps) {
    return (
      <Svg viewBox="0 0 256 256" fill={props.color}>
        <Path d="M224,96l-78.55,56h-34.9L32,96l96-64Z" opacity={0.2} />
        <Path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z" />
      </Svg>
    );
  },
);
