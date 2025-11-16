import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelSimpleXBold } from "../bold";
import { FunnelSimpleXDuotone } from "../duotone";
import { FunnelSimpleXFill } from "../fill";
import { FunnelSimpleXLight } from "../light";
import { FunnelSimpleXRegular } from "../regular";
import { FunnelSimpleXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FunnelSimpleX = memo(function FunnelSimpleX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelSimpleXBold,
      duotone: FunnelSimpleXDuotone,
      fill: FunnelSimpleXFill,
      light: FunnelSimpleXLight,
      regular: FunnelSimpleXRegular,
      thin: FunnelSimpleXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
