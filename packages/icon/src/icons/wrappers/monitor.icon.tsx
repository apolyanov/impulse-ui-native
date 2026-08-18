import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MonitorBoldIcon } from "../bold/monitor-bold.icon";
import { MonitorDuotoneIcon } from "../duotone/monitor-duotone.icon";
import { MonitorFillIcon } from "../fill/monitor-fill.icon";
import { MonitorLightIcon } from "../light/monitor-light.icon";
import { MonitorRegularIcon } from "../regular/monitor-regular.icon";
import { MonitorThinIcon } from "../thin/monitor-thin.icon";

export const MonitorIcon = memo(function Monitor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorBoldIcon,
      duotone: MonitorDuotoneIcon,
      fill: MonitorFillIcon,
      light: MonitorLightIcon,
      regular: MonitorRegularIcon,
      thin: MonitorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
