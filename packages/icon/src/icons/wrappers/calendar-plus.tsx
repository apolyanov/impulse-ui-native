import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarPlusBold } from "../bold";
import { CalendarPlusDuotone } from "../duotone";
import { CalendarPlusFill } from "../fill";
import { CalendarPlusLight } from "../light";
import { CalendarPlusRegular } from "../regular";
import { CalendarPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarPlus = memo(function CalendarPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarPlusBold,
      duotone: CalendarPlusDuotone,
      fill: CalendarPlusFill,
      light: CalendarPlusLight,
      regular: CalendarPlusRegular,
      thin: CalendarPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
