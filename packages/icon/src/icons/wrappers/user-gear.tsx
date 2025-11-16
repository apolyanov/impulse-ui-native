import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserGearBold } from "../bold";
import { UserGearDuotone } from "../duotone";
import { UserGearFill } from "../fill";
import { UserGearLight } from "../light";
import { UserGearRegular } from "../regular";
import { UserGearThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserGear = memo(function UserGear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserGearBold,
      duotone: UserGearDuotone,
      fill: UserGearFill,
      light: UserGearLight,
      regular: UserGearRegular,
      thin: UserGearThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
