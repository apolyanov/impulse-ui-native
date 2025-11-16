import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChartBarBold } from "../bold";
import { ChartBarDuotone } from "../duotone";
import { ChartBarFill } from "../fill";
import { ChartBarLight } from "../light";
import { ChartBarRegular } from "../regular";
import { ChartBarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChartBar = memo(function ChartBar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChartBarBold,
      duotone: ChartBarDuotone,
      fill: ChartBarFill,
      light: ChartBarLight,
      regular: ChartBarRegular,
      thin: ChartBarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
