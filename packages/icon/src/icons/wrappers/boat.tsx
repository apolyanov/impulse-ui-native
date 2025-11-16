import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoatBold } from "../bold";
import { BoatDuotone } from "../duotone";
import { BoatFill } from "../fill";
import { BoatLight } from "../light";
import { BoatRegular } from "../regular";
import { BoatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Boat = memo(function Boat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoatBold,
      duotone: BoatDuotone,
      fill: BoatFill,
      light: BoatLight,
      regular: BoatRegular,
      thin: BoatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
