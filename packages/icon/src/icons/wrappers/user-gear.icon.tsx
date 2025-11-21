import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserGearBoldIcon } from "../bold";
import { UserGearDuotoneIcon } from "../duotone";
import { UserGearFillIcon } from "../fill";
import { UserGearLightIcon } from "../light";
import { UserGearRegularIcon } from "../regular";
import { UserGearThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserGearIcon = memo(function UserGear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserGearBoldIcon,
      duotone: UserGearDuotoneIcon,
      fill: UserGearFillIcon,
      light: UserGearLightIcon,
      regular: UserGearRegularIcon,
      thin: UserGearThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
