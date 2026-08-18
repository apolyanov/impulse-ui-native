import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TimerBoldIcon } from "../bold/timer-bold.icon";
import { TimerDuotoneIcon } from "../duotone/timer-duotone.icon";
import { TimerFillIcon } from "../fill/timer-fill.icon";
import { TimerLightIcon } from "../light/timer-light.icon";
import { TimerRegularIcon } from "../regular/timer-regular.icon";
import { TimerThinIcon } from "../thin/timer-thin.icon";

export const TimerIcon = memo(function Timer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TimerBoldIcon,
      duotone: TimerDuotoneIcon,
      fill: TimerFillIcon,
      light: TimerLightIcon,
      regular: TimerRegularIcon,
      thin: TimerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
