import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartPolarBoldIcon } from "../bold";
import { ChartPolarDuotoneIcon } from "../duotone";
import { ChartPolarFillIcon } from "../fill";
import { ChartPolarLightIcon } from "../light";
import { ChartPolarRegularIcon } from "../regular";
import { ChartPolarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartPolarIcon = memo(function ChartPolar(
  props: IconWrapperProps
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
