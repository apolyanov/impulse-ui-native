import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarHeartBoldIcon } from "../bold/calendar-heart-bold.icon";
import { CalendarHeartDuotoneIcon } from "../duotone/calendar-heart-duotone.icon";
import { CalendarHeartFillIcon } from "../fill/calendar-heart-fill.icon";
import { CalendarHeartLightIcon } from "../light/calendar-heart-light.icon";
import { CalendarHeartRegularIcon } from "../regular/calendar-heart-regular.icon";
import { CalendarHeartThinIcon } from "../thin/calendar-heart-thin.icon";

export const CalendarHeartIcon = memo(function CalendarHeart(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarHeartBoldIcon,
      duotone: CalendarHeartDuotoneIcon,
      fill: CalendarHeartFillIcon,
      light: CalendarHeartLightIcon,
      regular: CalendarHeartRegularIcon,
      thin: CalendarHeartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
