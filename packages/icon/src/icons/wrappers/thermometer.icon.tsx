import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThermometerBoldIcon } from "../bold/thermometer-bold.icon";
import { ThermometerDuotoneIcon } from "../duotone/thermometer-duotone.icon";
import { ThermometerFillIcon } from "../fill/thermometer-fill.icon";
import { ThermometerLightIcon } from "../light/thermometer-light.icon";
import { ThermometerRegularIcon } from "../regular/thermometer-regular.icon";
import { ThermometerThinIcon } from "../thin/thermometer-thin.icon";

export const ThermometerIcon = memo(function Thermometer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerBoldIcon,
      duotone: ThermometerDuotoneIcon,
      fill: ThermometerFillIcon,
      light: ThermometerLightIcon,
      regular: ThermometerRegularIcon,
      thin: ThermometerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
