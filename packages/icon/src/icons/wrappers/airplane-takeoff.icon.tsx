import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneTakeoffBoldIcon } from "../bold";
import { AirplaneTakeoffDuotoneIcon } from "../duotone";
import { AirplaneTakeoffFillIcon } from "../fill";
import { AirplaneTakeoffLightIcon } from "../light";
import { AirplaneTakeoffRegularIcon } from "../regular";
import { AirplaneTakeoffThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneTakeoffIcon = memo(function AirplaneTakeoff(
  props: IconWrapperProps
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
