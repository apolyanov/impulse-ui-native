import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorPlayBold } from "../bold";
import { MonitorPlayDuotone } from "../duotone";
import { MonitorPlayFill } from "../fill";
import { MonitorPlayLight } from "../light";
import { MonitorPlayRegular } from "../regular";
import { MonitorPlayThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MonitorPlay = memo(function MonitorPlay(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorPlayBold,
      duotone: MonitorPlayDuotone,
      fill: MonitorPlayFill,
      light: MonitorPlayLight,
      regular: MonitorPlayRegular,
      thin: MonitorPlayThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
