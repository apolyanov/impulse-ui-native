import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficSignalBoldIcon } from "../bold";
import { TrafficSignalDuotoneIcon } from "../duotone";
import { TrafficSignalFillIcon } from "../fill";
import { TrafficSignalLightIcon } from "../light";
import { TrafficSignalRegularIcon } from "../regular";
import { TrafficSignalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficSignalIcon = memo(function TrafficSignal(
  props: IconWrapperProps
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
