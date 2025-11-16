import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SeatbeltBold } from "../bold";
import { SeatbeltDuotone } from "../duotone";
import { SeatbeltFill } from "../fill";
import { SeatbeltLight } from "../light";
import { SeatbeltRegular } from "../regular";
import { SeatbeltThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Seatbelt = memo(function Seatbelt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SeatbeltBold,
      duotone: SeatbeltDuotone,
      fill: SeatbeltFill,
      light: SeatbeltLight,
      regular: SeatbeltRegular,
      thin: SeatbeltThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
