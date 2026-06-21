import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChargingStationBoldIcon } from "../bold";
import { ChargingStationDuotoneIcon } from "../duotone";
import { ChargingStationFillIcon } from "../fill";
import { ChargingStationLightIcon } from "../light";
import { ChargingStationRegularIcon } from "../regular";
import { ChargingStationThinIcon } from "../thin";

export const ChargingStationIcon = memo(function ChargingStation(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChargingStationBoldIcon,
      duotone: ChargingStationDuotoneIcon,
      fill: ChargingStationFillIcon,
      light: ChargingStationLightIcon,
      regular: ChargingStationRegularIcon,
      thin: ChargingStationThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
