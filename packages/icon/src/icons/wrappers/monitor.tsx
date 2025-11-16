import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorBold } from "../bold";
import { MonitorDuotone } from "../duotone";
import { MonitorFill } from "../fill";
import { MonitorLight } from "../light";
import { MonitorRegular } from "../regular";
import { MonitorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Monitor = memo(function Monitor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorBold,
      duotone: MonitorDuotone,
      fill: MonitorFill,
      light: MonitorLight,
      regular: MonitorRegular,
      thin: MonitorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
