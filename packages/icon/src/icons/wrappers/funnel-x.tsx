import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelXBold } from "../bold";
import { FunnelXDuotone } from "../duotone";
import { FunnelXFill } from "../fill";
import { FunnelXLight } from "../light";
import { FunnelXRegular } from "../regular";
import { FunnelXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FunnelX = memo(function FunnelX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelXBold,
      duotone: FunnelXDuotone,
      fill: FunnelXFill,
      light: FunnelXLight,
      regular: FunnelXRegular,
      thin: FunnelXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
