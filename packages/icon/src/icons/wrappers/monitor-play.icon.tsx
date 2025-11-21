import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MonitorPlayBoldIcon } from "../bold";
import { MonitorPlayDuotoneIcon } from "../duotone";
import { MonitorPlayFillIcon } from "../fill";
import { MonitorPlayLightIcon } from "../light";
import { MonitorPlayRegularIcon } from "../regular";
import { MonitorPlayThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MonitorPlayIcon = memo(function MonitorPlay(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MonitorPlayBoldIcon,
      duotone: MonitorPlayDuotoneIcon,
      fill: MonitorPlayFillIcon,
      light: MonitorPlayLightIcon,
      regular: MonitorPlayRegularIcon,
      thin: MonitorPlayThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
