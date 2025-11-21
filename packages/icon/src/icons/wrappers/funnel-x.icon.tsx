import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelXBoldIcon } from "../bold";
import { FunnelXDuotoneIcon } from "../duotone";
import { FunnelXFillIcon } from "../fill";
import { FunnelXLightIcon } from "../light";
import { FunnelXRegularIcon } from "../regular";
import { FunnelXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FunnelXIcon = memo(function FunnelX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelXBoldIcon,
      duotone: FunnelXDuotoneIcon,
      fill: FunnelXFillIcon,
      light: FunnelXLightIcon,
      regular: FunnelXRegularIcon,
      thin: FunnelXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
