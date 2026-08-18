import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThermometerHotBoldIcon } from "../bold/thermometer-hot-bold.icon";
import { ThermometerHotDuotoneIcon } from "../duotone/thermometer-hot-duotone.icon";
import { ThermometerHotFillIcon } from "../fill/thermometer-hot-fill.icon";
import { ThermometerHotLightIcon } from "../light/thermometer-hot-light.icon";
import { ThermometerHotRegularIcon } from "../regular/thermometer-hot-regular.icon";
import { ThermometerHotThinIcon } from "../thin/thermometer-hot-thin.icon";

export const ThermometerHotIcon = memo(function ThermometerHot(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerHotBoldIcon,
      duotone: ThermometerHotDuotoneIcon,
      fill: ThermometerHotFillIcon,
      light: ThermometerHotLightIcon,
      regular: ThermometerHotRegularIcon,
      thin: ThermometerHotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
