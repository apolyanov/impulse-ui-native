import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryMediumBoldIcon } from "../bold";
import { BatteryMediumDuotoneIcon } from "../duotone";
import { BatteryMediumFillIcon } from "../fill";
import { BatteryMediumLightIcon } from "../light";
import { BatteryMediumRegularIcon } from "../regular";
import { BatteryMediumThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryMediumIcon = memo(function BatteryMedium(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryMediumBoldIcon,
      duotone: BatteryMediumDuotoneIcon,
      fill: BatteryMediumFillIcon,
      light: BatteryMediumLightIcon,
      regular: BatteryMediumRegularIcon,
      thin: BatteryMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
