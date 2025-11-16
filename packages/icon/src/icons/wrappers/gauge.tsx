import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GaugeBold } from "../bold";
import { GaugeDuotone } from "../duotone";
import { GaugeFill } from "../fill";
import { GaugeLight } from "../light";
import { GaugeRegular } from "../regular";
import { GaugeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gauge = memo(function Gauge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GaugeBold,
      duotone: GaugeDuotone,
      fill: GaugeFill,
      light: GaugeLight,
      regular: GaugeRegular,
      thin: GaugeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
