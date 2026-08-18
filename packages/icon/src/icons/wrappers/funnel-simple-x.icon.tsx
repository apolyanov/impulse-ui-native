import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunnelSimpleXBoldIcon } from "../bold/funnel-simple-x-bold.icon";
import { FunnelSimpleXDuotoneIcon } from "../duotone/funnel-simple-x-duotone.icon";
import { FunnelSimpleXFillIcon } from "../fill/funnel-simple-x-fill.icon";
import { FunnelSimpleXLightIcon } from "../light/funnel-simple-x-light.icon";
import { FunnelSimpleXRegularIcon } from "../regular/funnel-simple-x-regular.icon";
import { FunnelSimpleXThinIcon } from "../thin/funnel-simple-x-thin.icon";

export const FunnelSimpleXIcon = memo(function FunnelSimpleX(
  props: IconWrapperProps,
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
