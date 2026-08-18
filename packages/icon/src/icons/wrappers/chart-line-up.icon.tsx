import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartLineUpBoldIcon } from "../bold/chart-line-up-bold.icon";
import { ChartLineUpDuotoneIcon } from "../duotone/chart-line-up-duotone.icon";
import { ChartLineUpFillIcon } from "../fill/chart-line-up-fill.icon";
import { ChartLineUpLightIcon } from "../light/chart-line-up-light.icon";
import { ChartLineUpRegularIcon } from "../regular/chart-line-up-regular.icon";
import { ChartLineUpThinIcon } from "../thin/chart-line-up-thin.icon";

export const ChartLineUpIcon = memo(function ChartLineUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartLineUpBoldIcon,
      duotone: ChartLineUpDuotoneIcon,
      fill: ChartLineUpFillIcon,
      light: ChartLineUpLightIcon,
      regular: ChartLineUpRegularIcon,
      thin: ChartLineUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
