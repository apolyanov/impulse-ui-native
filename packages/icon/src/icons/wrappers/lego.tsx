import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LegoBold } from "../bold";
import { LegoDuotone } from "../duotone";
import { LegoFill } from "../fill";
import { LegoLight } from "../light";
import { LegoRegular } from "../regular";
import { LegoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lego = memo(function Lego(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LegoBold,
      duotone: LegoDuotone,
      fill: LegoFill,
      light: LegoLight,
      regular: LegoRegular,
      thin: LegoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
