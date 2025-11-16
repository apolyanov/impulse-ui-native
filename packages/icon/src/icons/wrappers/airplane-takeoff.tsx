import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneTakeoffBold } from "../bold";
import { AirplaneTakeoffDuotone } from "../duotone";
import { AirplaneTakeoffFill } from "../fill";
import { AirplaneTakeoffLight } from "../light";
import { AirplaneTakeoffRegular } from "../regular";
import { AirplaneTakeoffThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneTakeoff = memo(function AirplaneTakeoff(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneTakeoffBold,
      duotone: AirplaneTakeoffDuotone,
      fill: AirplaneTakeoffFill,
      light: AirplaneTakeoffLight,
      regular: AirplaneTakeoffRegular,
      thin: AirplaneTakeoffThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
