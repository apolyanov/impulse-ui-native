import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarMinusBold } from "../bold";
import { CalendarMinusDuotone } from "../duotone";
import { CalendarMinusFill } from "../fill";
import { CalendarMinusLight } from "../light";
import { CalendarMinusRegular } from "../regular";
import { CalendarMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarMinus = memo(function CalendarMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarMinusBold,
      duotone: CalendarMinusDuotone,
      fill: CalendarMinusFill,
      light: CalendarMinusLight,
      regular: CalendarMinusRegular,
      thin: CalendarMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
