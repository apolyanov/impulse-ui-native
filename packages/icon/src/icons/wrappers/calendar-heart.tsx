import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarHeartBold } from "../bold";
import { CalendarHeartDuotone } from "../duotone";
import { CalendarHeartFill } from "../fill";
import { CalendarHeartLight } from "../light";
import { CalendarHeartRegular } from "../regular";
import { CalendarHeartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarHeart = memo(function CalendarHeart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarHeartBold,
      duotone: CalendarHeartDuotone,
      fill: CalendarHeartFill,
      light: CalendarHeartLight,
      regular: CalendarHeartRegular,
      thin: CalendarHeartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
