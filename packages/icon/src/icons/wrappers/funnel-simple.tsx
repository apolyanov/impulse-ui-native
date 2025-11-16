import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FunnelSimpleBold } from "../bold";
import { FunnelSimpleDuotone } from "../duotone";
import { FunnelSimpleFill } from "../fill";
import { FunnelSimpleLight } from "../light";
import { FunnelSimpleRegular } from "../regular";
import { FunnelSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FunnelSimple = memo(function FunnelSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FunnelSimpleBold,
      duotone: FunnelSimpleDuotone,
      fill: FunnelSimpleFill,
      light: FunnelSimpleLight,
      regular: FunnelSimpleRegular,
      thin: FunnelSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
