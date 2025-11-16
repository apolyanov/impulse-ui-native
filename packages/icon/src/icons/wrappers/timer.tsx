import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TimerBold } from "../bold";
import { TimerDuotone } from "../duotone";
import { TimerFill } from "../fill";
import { TimerLight } from "../light";
import { TimerRegular } from "../regular";
import { TimerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Timer = memo(function Timer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TimerBold,
      duotone: TimerDuotone,
      fill: TimerFill,
      light: TimerLight,
      regular: TimerRegular,
      thin: TimerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
