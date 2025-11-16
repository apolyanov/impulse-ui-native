import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorArrowUpBold } from "../bold";
import { MonitorArrowUpDuotone } from "../duotone";
import { MonitorArrowUpFill } from "../fill";
import { MonitorArrowUpLight } from "../light";
import { MonitorArrowUpRegular } from "../regular";
import { MonitorArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MonitorArrowUp = memo(function MonitorArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorArrowUpBold,
      duotone: MonitorArrowUpDuotone,
      fill: MonitorArrowUpFill,
      light: MonitorArrowUpLight,
      regular: MonitorArrowUpRegular,
      thin: MonitorArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
