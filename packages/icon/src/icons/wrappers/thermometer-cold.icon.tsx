import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerColdBoldIcon } from "../bold";
import { ThermometerColdDuotoneIcon } from "../duotone";
import { ThermometerColdFillIcon } from "../fill";
import { ThermometerColdLightIcon } from "../light";
import { ThermometerColdRegularIcon } from "../regular";
import { ThermometerColdThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThermometerColdIcon = memo(function ThermometerCold(
  props: IconWrapperProps
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
