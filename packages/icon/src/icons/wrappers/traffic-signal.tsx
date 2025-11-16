import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrafficSignalBold } from "../bold";
import { TrafficSignalDuotone } from "../duotone";
import { TrafficSignalFill } from "../fill";
import { TrafficSignalLight } from "../light";
import { TrafficSignalRegular } from "../regular";
import { TrafficSignalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrafficSignal = memo(function TrafficSignal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrafficSignalBold,
      duotone: TrafficSignalDuotone,
      fill: TrafficSignalFill,
      light: TrafficSignalLight,
      regular: TrafficSignalRegular,
      thin: TrafficSignalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
