import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalendarSlashBoldIcon } from "../bold/calendar-slash-bold.icon";
import { CalendarSlashDuotoneIcon } from "../duotone/calendar-slash-duotone.icon";
import { CalendarSlashFillIcon } from "../fill/calendar-slash-fill.icon";
import { CalendarSlashLightIcon } from "../light/calendar-slash-light.icon";
import { CalendarSlashRegularIcon } from "../regular/calendar-slash-regular.icon";
import { CalendarSlashThinIcon } from "../thin/calendar-slash-thin.icon";

export const CalendarSlashIcon = memo(function CalendarSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarSlashBoldIcon,
      duotone: CalendarSlashDuotoneIcon,
      fill: CalendarSlashFillIcon,
      light: CalendarSlashLightIcon,
      regular: CalendarSlashRegularIcon,
      thin: CalendarSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
