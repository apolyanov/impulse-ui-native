import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChartBarBoldIcon } from "../bold/chart-bar-bold.icon";
import { ChartBarDuotoneIcon } from "../duotone/chart-bar-duotone.icon";
import { ChartBarFillIcon } from "../fill/chart-bar-fill.icon";
import { ChartBarLightIcon } from "../light/chart-bar-light.icon";
import { ChartBarRegularIcon } from "../regular/chart-bar-regular.icon";
import { ChartBarThinIcon } from "../thin/chart-bar-thin.icon";

export const ChartBarIcon = memo(function ChartBar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartBarBoldIcon,
      duotone: ChartBarDuotoneIcon,
      fill: ChartBarFillIcon,
      light: ChartBarLightIcon,
      regular: ChartBarRegularIcon,
      thin: ChartBarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
