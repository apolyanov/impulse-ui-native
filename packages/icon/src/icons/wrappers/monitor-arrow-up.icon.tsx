import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorArrowUpBoldIcon } from "../bold";
import { MonitorArrowUpDuotoneIcon } from "../duotone";
import { MonitorArrowUpFillIcon } from "../fill";
import { MonitorArrowUpLightIcon } from "../light";
import { MonitorArrowUpRegularIcon } from "../regular";
import { MonitorArrowUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MonitorArrowUpIcon = memo(function MonitorArrowUp(
  props: IconWrapperProps
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
