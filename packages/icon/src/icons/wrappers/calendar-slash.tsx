import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarSlashBold } from "../bold";
import { CalendarSlashDuotone } from "../duotone";
import { CalendarSlashFill } from "../fill";
import { CalendarSlashLight } from "../light";
import { CalendarSlashRegular } from "../regular";
import { CalendarSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarSlash = memo(function CalendarSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarSlashBold,
      duotone: CalendarSlashDuotone,
      fill: CalendarSlashFill,
      light: CalendarSlashLight,
      regular: CalendarSlashRegular,
      thin: CalendarSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
