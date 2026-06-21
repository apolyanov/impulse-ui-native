import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FunnelBoldIcon } from "../bold";
import { FunnelDuotoneIcon } from "../duotone";
import { FunnelFillIcon } from "../fill";
import { FunnelLightIcon } from "../light";
import { FunnelRegularIcon } from "../regular";
import { FunnelThinIcon } from "../thin";

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
