import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartPolarBoldIcon } from "../bold/chart-polar-bold.icon";
import { ChartPolarDuotoneIcon } from "../duotone/chart-polar-duotone.icon";
import { ChartPolarFillIcon } from "../fill/chart-polar-fill.icon";
import { ChartPolarLightIcon } from "../light/chart-polar-light.icon";
import { ChartPolarRegularIcon } from "../regular/chart-polar-regular.icon";
import { ChartPolarThinIcon } from "../thin/chart-polar-thin.icon";

export const ChartPolarIcon = memo(function ChartPolar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPolarBoldIcon,
      duotone: ChartPolarDuotoneIcon,
      fill: ChartPolarFillIcon,
      light: ChartPolarLightIcon,
      regular: ChartPolarRegularIcon,
      thin: ChartPolarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
