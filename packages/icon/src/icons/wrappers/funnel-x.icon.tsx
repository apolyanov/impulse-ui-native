import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunnelXBoldIcon } from "../bold/funnel-x-bold.icon";
import { FunnelXDuotoneIcon } from "../duotone/funnel-x-duotone.icon";
import { FunnelXFillIcon } from "../fill/funnel-x-fill.icon";
import { FunnelXLightIcon } from "../light/funnel-x-light.icon";
import { FunnelXRegularIcon } from "../regular/funnel-x-regular.icon";
import { FunnelXThinIcon } from "../thin/funnel-x-thin.icon";

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
