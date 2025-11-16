import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalendarDotsBold } from "../bold";
import { CalendarDotsDuotone } from "../duotone";
import { CalendarDotsFill } from "../fill";
import { CalendarDotsLight } from "../light";
import { CalendarDotsRegular } from "../regular";
import { CalendarDotsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CalendarDots = memo(function CalendarDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalendarDotsBold,
      duotone: CalendarDotsDuotone,
      fill: CalendarDotsFill,
      light: CalendarDotsLight,
      regular: CalendarDotsRegular,
      thin: CalendarDotsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
