import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunnelBoldIcon } from "../bold/funnel-bold.icon";
import { FunnelDuotoneIcon } from "../duotone/funnel-duotone.icon";
import { FunnelFillIcon } from "../fill/funnel-fill.icon";
import { FunnelLightIcon } from "../light/funnel-light.icon";
import { FunnelRegularIcon } from "../regular/funnel-regular.icon";
import { FunnelThinIcon } from "../thin/funnel-thin.icon";

export const FunnelIcon = memo(function Funnel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelBoldIcon,
      duotone: FunnelDuotoneIcon,
      fill: FunnelFillIcon,
      light: FunnelLightIcon,
      regular: FunnelRegularIcon,
      thin: FunnelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
