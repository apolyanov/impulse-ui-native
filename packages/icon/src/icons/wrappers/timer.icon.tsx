import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TimerBoldIcon } from "../bold";
import { TimerDuotoneIcon } from "../duotone";
import { TimerFillIcon } from "../fill";
import { TimerLightIcon } from "../light";
import { TimerRegularIcon } from "../regular";
import { TimerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
