import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandshakeBoldIcon } from "../bold/handshake-bold.icon";
import { HandshakeDuotoneIcon } from "../duotone/handshake-duotone.icon";
import { HandshakeFillIcon } from "../fill/handshake-fill.icon";
import { HandshakeLightIcon } from "../light/handshake-light.icon";
import { HandshakeRegularIcon } from "../regular/handshake-regular.icon";
import { HandshakeThinIcon } from "../thin/handshake-thin.icon";

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
