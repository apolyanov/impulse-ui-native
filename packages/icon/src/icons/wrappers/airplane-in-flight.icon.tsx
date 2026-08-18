import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneInFlightBoldIcon } from "../bold/airplane-in-flight-bold.icon";
import { AirplaneInFlightDuotoneIcon } from "../duotone/airplane-in-flight-duotone.icon";
import { AirplaneInFlightFillIcon } from "../fill/airplane-in-flight-fill.icon";
import { AirplaneInFlightLightIcon } from "../light/airplane-in-flight-light.icon";
import { AirplaneInFlightRegularIcon } from "../regular/airplane-in-flight-regular.icon";
import { AirplaneInFlightThinIcon } from "../thin/airplane-in-flight-thin.icon";

export const AirplaneInFlightIcon = memo(function AirplaneInFlight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneInFlightBoldIcon,
      duotone: AirplaneInFlightDuotoneIcon,
      fill: AirplaneInFlightFillIcon,
      light: AirplaneInFlightLightIcon,
      regular: AirplaneInFlightRegularIcon,
      thin: AirplaneInFlightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
