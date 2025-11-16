import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SockBold } from "../bold";
import { SockDuotone } from "../duotone";
import { SockFill } from "../fill";
import { SockLight } from "../light";
import { SockRegular } from "../regular";
import { SockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sock = memo(function Sock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SockBold,
      duotone: SockDuotone,
      fill: SockFill,
      light: SockLight,
      regular: SockRegular,
      thin: SockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
