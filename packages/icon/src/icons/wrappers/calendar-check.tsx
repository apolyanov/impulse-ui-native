import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarCheckBold } from "../bold";
import { CalendarCheckDuotone } from "../duotone";
import { CalendarCheckFill } from "../fill";
import { CalendarCheckLight } from "../light";
import { CalendarCheckRegular } from "../regular";
import { CalendarCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarCheck = memo(function CalendarCheck(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarCheckBold,
      duotone: CalendarCheckDuotone,
      fill: CalendarCheckFill,
      light: CalendarCheckLight,
      regular: CalendarCheckRegular,
      thin: CalendarCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
