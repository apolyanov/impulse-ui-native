import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrafficSignalBoldIcon } from "../bold/traffic-signal-bold.icon";
import { TrafficSignalDuotoneIcon } from "../duotone/traffic-signal-duotone.icon";
import { TrafficSignalFillIcon } from "../fill/traffic-signal-fill.icon";
import { TrafficSignalLightIcon } from "../light/traffic-signal-light.icon";
import { TrafficSignalRegularIcon } from "../regular/traffic-signal-regular.icon";
import { TrafficSignalThinIcon } from "../thin/traffic-signal-thin.icon";

export const TrafficSignalIcon = memo(function TrafficSignal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficSignalBoldIcon,
      duotone: TrafficSignalDuotoneIcon,
      fill: TrafficSignalFillIcon,
      light: TrafficSignalLightIcon,
      regular: TrafficSignalRegularIcon,
      thin: TrafficSignalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
