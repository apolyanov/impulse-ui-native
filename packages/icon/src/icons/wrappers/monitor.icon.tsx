import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorBoldIcon } from "../bold";
import { MonitorDuotoneIcon } from "../duotone";
import { MonitorFillIcon } from "../fill";
import { MonitorLightIcon } from "../light";
import { MonitorRegularIcon } from "../regular";
import { MonitorThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
