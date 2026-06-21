import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserGearBoldIcon } from "../bold";
import { UserGearDuotoneIcon } from "../duotone";
import { UserGearFillIcon } from "../fill";
import { UserGearLightIcon } from "../light";
import { UserGearRegularIcon } from "../regular";
import { UserGearThinIcon } from "../thin";

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
