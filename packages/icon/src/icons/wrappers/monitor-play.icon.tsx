import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MonitorPlayBoldIcon } from "../bold/monitor-play-bold.icon";
import { MonitorPlayDuotoneIcon } from "../duotone/monitor-play-duotone.icon";
import { MonitorPlayFillIcon } from "../fill/monitor-play-fill.icon";
import { MonitorPlayLightIcon } from "../light/monitor-play-light.icon";
import { MonitorPlayRegularIcon } from "../regular/monitor-play-regular.icon";
import { MonitorPlayThinIcon } from "../thin/monitor-play-thin.icon";

export const MonitorPlayIcon = memo(function MonitorPlay(
  props: IconWrapperProps,
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
