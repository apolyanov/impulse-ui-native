import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChargingStationBold } from "../bold";
import { ChargingStationDuotone } from "../duotone";
import { ChargingStationFill } from "../fill";
import { ChargingStationLight } from "../light";
import { ChargingStationRegular } from "../regular";
import { ChargingStationThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChargingStation = memo(function ChargingStation(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChargingStationBold,
      duotone: ChargingStationDuotone,
      fill: ChargingStationFill,
      light: ChargingStationLight,
      regular: ChargingStationRegular,
      thin: ChargingStationThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
