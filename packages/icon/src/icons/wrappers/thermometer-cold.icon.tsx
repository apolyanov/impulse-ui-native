import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThermometerColdBoldIcon } from "../bold/thermometer-cold-bold.icon";
import { ThermometerColdDuotoneIcon } from "../duotone/thermometer-cold-duotone.icon";
import { ThermometerColdFillIcon } from "../fill/thermometer-cold-fill.icon";
import { ThermometerColdLightIcon } from "../light/thermometer-cold-light.icon";
import { ThermometerColdRegularIcon } from "../regular/thermometer-cold-regular.icon";
import { ThermometerColdThinIcon } from "../thin/thermometer-cold-thin.icon";

export const ThermometerColdIcon = memo(function ThermometerCold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerColdBoldIcon,
      duotone: ThermometerColdDuotoneIcon,
      fill: ThermometerColdFillIcon,
      light: ThermometerColdLightIcon,
      regular: ThermometerColdRegularIcon,
      thin: ThermometerColdThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
