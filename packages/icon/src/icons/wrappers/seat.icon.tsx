import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SeatBoldIcon } from "../bold/seat-bold.icon";
import { SeatDuotoneIcon } from "../duotone/seat-duotone.icon";
import { SeatFillIcon } from "../fill/seat-fill.icon";
import { SeatLightIcon } from "../light/seat-light.icon";
import { SeatRegularIcon } from "../regular/seat-regular.icon";
import { SeatThinIcon } from "../thin/seat-thin.icon";

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
