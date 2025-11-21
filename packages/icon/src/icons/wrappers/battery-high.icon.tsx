import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BatteryHighBoldIcon } from "../bold";
import { BatteryHighDuotoneIcon } from "../duotone";
import { BatteryHighFillIcon } from "../fill";
import { BatteryHighLightIcon } from "../light";
import { BatteryHighRegularIcon } from "../regular";
import { BatteryHighThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BatteryHighIcon = memo(function BatteryHigh(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BatteryHighBoldIcon,
      duotone: BatteryHighDuotoneIcon,
      fill: BatteryHighFillIcon,
      light: BatteryHighLightIcon,
      regular: BatteryHighRegularIcon,
      thin: BatteryHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
