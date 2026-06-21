import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandshakeBoldIcon } from "../bold";
import { HandshakeDuotoneIcon } from "../duotone";
import { HandshakeFillIcon } from "../fill";
import { HandshakeLightIcon } from "../light";
import { HandshakeRegularIcon } from "../regular";
import { HandshakeThinIcon } from "../thin";

export const HandshakeIcon = memo(function Handshake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandshakeBoldIcon,
      duotone: HandshakeDuotoneIcon,
      fill: HandshakeFillIcon,
      light: HandshakeLightIcon,
      regular: HandshakeRegularIcon,
      thin: HandshakeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
