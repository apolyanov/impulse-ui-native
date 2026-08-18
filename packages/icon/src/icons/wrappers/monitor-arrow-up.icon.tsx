import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MonitorArrowUpBoldIcon } from "../bold/monitor-arrow-up-bold.icon";
import { MonitorArrowUpDuotoneIcon } from "../duotone/monitor-arrow-up-duotone.icon";
import { MonitorArrowUpFillIcon } from "../fill/monitor-arrow-up-fill.icon";
import { MonitorArrowUpLightIcon } from "../light/monitor-arrow-up-light.icon";
import { MonitorArrowUpRegularIcon } from "../regular/monitor-arrow-up-regular.icon";
import { MonitorArrowUpThinIcon } from "../thin/monitor-arrow-up-thin.icon";

export const MonitorArrowUpIcon = memo(function MonitorArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorArrowUpBoldIcon,
      duotone: MonitorArrowUpDuotoneIcon,
      fill: MonitorArrowUpFillIcon,
      light: MonitorArrowUpLightIcon,
      regular: MonitorArrowUpRegularIcon,
      thin: MonitorArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
