import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunnelSimpleBoldIcon } from "../bold/funnel-simple-bold.icon";
import { FunnelSimpleDuotoneIcon } from "../duotone/funnel-simple-duotone.icon";
import { FunnelSimpleFillIcon } from "../fill/funnel-simple-fill.icon";
import { FunnelSimpleLightIcon } from "../light/funnel-simple-light.icon";
import { FunnelSimpleRegularIcon } from "../regular/funnel-simple-regular.icon";
import { FunnelSimpleThinIcon } from "../thin/funnel-simple-thin.icon";

export const FunnelSimpleIcon = memo(function FunnelSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelSimpleBoldIcon,
      duotone: FunnelSimpleDuotoneIcon,
      fill: FunnelSimpleFillIcon,
      light: FunnelSimpleLightIcon,
      regular: FunnelSimpleRegularIcon,
      thin: FunnelSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
