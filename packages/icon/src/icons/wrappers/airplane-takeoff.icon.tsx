import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneTakeoffBoldIcon } from "../bold/airplane-takeoff-bold.icon";
import { AirplaneTakeoffDuotoneIcon } from "../duotone/airplane-takeoff-duotone.icon";
import { AirplaneTakeoffFillIcon } from "../fill/airplane-takeoff-fill.icon";
import { AirplaneTakeoffLightIcon } from "../light/airplane-takeoff-light.icon";
import { AirplaneTakeoffRegularIcon } from "../regular/airplane-takeoff-regular.icon";
import { AirplaneTakeoffThinIcon } from "../thin/airplane-takeoff-thin.icon";

export const AirplaneTakeoffIcon = memo(function AirplaneTakeoff(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTakeoffBoldIcon,
      duotone: AirplaneTakeoffDuotoneIcon,
      fill: AirplaneTakeoffFillIcon,
      light: AirplaneTakeoffLightIcon,
      regular: AirplaneTakeoffRegularIcon,
      thin: AirplaneTakeoffThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
