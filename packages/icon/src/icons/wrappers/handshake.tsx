import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandshakeBold } from "../bold";
import { HandshakeDuotone } from "../duotone";
import { HandshakeFill } from "../fill";
import { HandshakeLight } from "../light";
import { HandshakeRegular } from "../regular";
import { HandshakeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Handshake = memo(function Handshake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandshakeBold,
      duotone: HandshakeDuotone,
      fill: HandshakeFill,
      light: HandshakeLight,
      regular: HandshakeRegular,
      thin: HandshakeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
