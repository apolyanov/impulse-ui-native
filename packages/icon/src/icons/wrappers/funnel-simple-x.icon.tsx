import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelSimpleXBoldIcon } from "../bold";
import { FunnelSimpleXDuotoneIcon } from "../duotone";
import { FunnelSimpleXFillIcon } from "../fill";
import { FunnelSimpleXLightIcon } from "../light";
import { FunnelSimpleXRegularIcon } from "../regular";
import { FunnelSimpleXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FunnelSimpleXIcon = memo(function FunnelSimpleX(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelSimpleXBoldIcon,
      duotone: FunnelSimpleXDuotoneIcon,
      fill: FunnelSimpleXFillIcon,
      light: FunnelSimpleXLightIcon,
      regular: FunnelSimpleXRegularIcon,
      thin: FunnelSimpleXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
