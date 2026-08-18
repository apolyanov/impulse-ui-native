import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChargingStationBoldIcon } from "../bold/charging-station-bold.icon";
import { ChargingStationDuotoneIcon } from "../duotone/charging-station-duotone.icon";
import { ChargingStationFillIcon } from "../fill/charging-station-fill.icon";
import { ChargingStationLightIcon } from "../light/charging-station-light.icon";
import { ChargingStationRegularIcon } from "../regular/charging-station-regular.icon";
import { ChargingStationThinIcon } from "../thin/charging-station-thin.icon";

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
