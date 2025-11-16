import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GearBold } from "../bold";
import { GearDuotone } from "../duotone";
import { GearFill } from "../fill";
import { GearLight } from "../light";
import { GearRegular } from "../regular";
import { GearThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gear = memo(function Gear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearBold,
      duotone: GearDuotone,
      fill: GearFill,
      light: GearLight,
      regular: GearRegular,
      thin: GearThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
