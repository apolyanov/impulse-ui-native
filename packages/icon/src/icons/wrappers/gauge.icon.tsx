import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GaugeBoldIcon } from "../bold/gauge-bold.icon";
import { GaugeDuotoneIcon } from "../duotone/gauge-duotone.icon";
import { GaugeFillIcon } from "../fill/gauge-fill.icon";
import { GaugeLightIcon } from "../light/gauge-light.icon";
import { GaugeRegularIcon } from "../regular/gauge-regular.icon";
import { GaugeThinIcon } from "../thin/gauge-thin.icon";

export const GaugeIcon = memo(function Gauge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GaugeBoldIcon,
      duotone: GaugeDuotoneIcon,
      fill: GaugeFillIcon,
      light: GaugeLightIcon,
      regular: GaugeRegularIcon,
      thin: GaugeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
