import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryMediumBold } from "../bold";
import { BatteryMediumDuotone } from "../duotone";
import { BatteryMediumFill } from "../fill";
import { BatteryMediumLight } from "../light";
import { BatteryMediumRegular } from "../regular";
import { BatteryMediumThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryMedium = memo(function BatteryMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryMediumBold,
      duotone: BatteryMediumDuotone,
      fill: BatteryMediumFill,
      light: BatteryMediumLight,
      regular: BatteryMediumRegular,
      thin: BatteryMediumThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
