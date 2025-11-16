import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarBlankBold } from "../bold";
import { CalendarBlankDuotone } from "../duotone";
import { CalendarBlankFill } from "../fill";
import { CalendarBlankLight } from "../light";
import { CalendarBlankRegular } from "../regular";
import { CalendarBlankThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarBlank = memo(function CalendarBlank(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarBlankBold,
      duotone: CalendarBlankDuotone,
      fill: CalendarBlankFill,
      light: CalendarBlankLight,
      regular: CalendarBlankRegular,
      thin: CalendarBlankThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
