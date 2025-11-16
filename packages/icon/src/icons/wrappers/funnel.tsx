import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelBold } from "../bold";
import { FunnelDuotone } from "../duotone";
import { FunnelFill } from "../fill";
import { FunnelLight } from "../light";
import { FunnelRegular } from "../regular";
import { FunnelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Funnel = memo(function Funnel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelBold,
      duotone: FunnelDuotone,
      fill: FunnelFill,
      light: FunnelLight,
      regular: FunnelRegular,
      thin: FunnelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
