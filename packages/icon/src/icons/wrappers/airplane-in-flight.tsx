import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneInFlightBold } from "../bold";
import { AirplaneInFlightDuotone } from "../duotone";
import { AirplaneInFlightFill } from "../fill";
import { AirplaneInFlightLight } from "../light";
import { AirplaneInFlightRegular } from "../regular";
import { AirplaneInFlightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneInFlight = memo(function AirplaneInFlight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneInFlightBold,
      duotone: AirplaneInFlightDuotone,
      fill: AirplaneInFlightFill,
      light: AirplaneInFlightLight,
      regular: AirplaneInFlightRegular,
      thin: AirplaneInFlightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
