import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartPolarBold } from "../bold";
import { ChartPolarDuotone } from "../duotone";
import { ChartPolarFill } from "../fill";
import { ChartPolarLight } from "../light";
import { ChartPolarRegular } from "../regular";
import { ChartPolarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartPolar = memo(function ChartPolar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartPolarBold,
      duotone: ChartPolarDuotone,
      fill: ChartPolarFill,
      light: ChartPolarLight,
      regular: ChartPolarRegular,
      thin: ChartPolarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
