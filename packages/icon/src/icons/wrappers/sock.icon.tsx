import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SockBoldIcon } from "../bold";
import { SockDuotoneIcon } from "../duotone";
import { SockFillIcon } from "../fill";
import { SockLightIcon } from "../light";
import { SockRegularIcon } from "../regular";
import { SockThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SockIcon = memo(function Sock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SockBoldIcon,
      duotone: SockDuotoneIcon,
      fill: SockFillIcon,
      light: SockLightIcon,
      regular: SockRegularIcon,
      thin: SockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
