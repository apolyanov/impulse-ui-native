import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SeatBold } from "../bold";
import { SeatDuotone } from "../duotone";
import { SeatFill } from "../fill";
import { SeatLight } from "../light";
import { SeatRegular } from "../regular";
import { SeatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Seat = memo(function Seat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SeatBold,
      duotone: SeatDuotone,
      fill: SeatFill,
      light: SeatLight,
      regular: SeatRegular,
      thin: SeatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
