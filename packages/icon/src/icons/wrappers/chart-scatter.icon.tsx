import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartScatterBoldIcon } from "../bold";
import { ChartScatterDuotoneIcon } from "../duotone";
import { ChartScatterFillIcon } from "../fill";
import { ChartScatterLightIcon } from "../light";
import { ChartScatterRegularIcon } from "../regular";
import { ChartScatterThinIcon } from "../thin";

export const ChartScatterIcon = memo(function ChartScatter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartScatterBoldIcon,
      duotone: ChartScatterDuotoneIcon,
      fill: ChartScatterFillIcon,
      light: ChartScatterLightIcon,
      regular: ChartScatterRegularIcon,
      thin: ChartScatterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
