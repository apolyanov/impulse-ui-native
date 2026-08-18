import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SeatbeltBoldIcon } from "../bold/seatbelt-bold.icon";
import { SeatbeltDuotoneIcon } from "../duotone/seatbelt-duotone.icon";
import { SeatbeltFillIcon } from "../fill/seatbelt-fill.icon";
import { SeatbeltLightIcon } from "../light/seatbelt-light.icon";
import { SeatbeltRegularIcon } from "../regular/seatbelt-regular.icon";
import { SeatbeltThinIcon } from "../thin/seatbelt-thin.icon";

export const SeatbeltIcon = memo(function Seatbelt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SeatbeltBoldIcon,
      duotone: SeatbeltDuotoneIcon,
      fill: SeatbeltFillIcon,
      light: SeatbeltLightIcon,
      regular: SeatbeltRegularIcon,
      thin: SeatbeltThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
