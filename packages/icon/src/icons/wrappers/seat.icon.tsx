import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SeatBoldIcon } from "../bold";
import { SeatDuotoneIcon } from "../duotone";
import { SeatFillIcon } from "../fill";
import { SeatLightIcon } from "../light";
import { SeatRegularIcon } from "../regular";
import { SeatThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SeatIcon = memo(function Seat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SeatBoldIcon,
      duotone: SeatDuotoneIcon,
      fill: SeatFillIcon,
      light: SeatLightIcon,
      regular: SeatRegularIcon,
      thin: SeatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
