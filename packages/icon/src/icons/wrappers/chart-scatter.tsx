import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartScatterBold } from "../bold";
import { ChartScatterDuotone } from "../duotone";
import { ChartScatterFill } from "../fill";
import { ChartScatterLight } from "../light";
import { ChartScatterRegular } from "../regular";
import { ChartScatterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartScatter = memo(function ChartScatter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartScatterBold,
      duotone: ChartScatterDuotone,
      fill: ChartScatterFill,
      light: ChartScatterLight,
      regular: ChartScatterRegular,
      thin: ChartScatterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
