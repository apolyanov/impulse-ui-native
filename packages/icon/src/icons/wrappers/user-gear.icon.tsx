import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserGearBoldIcon } from "../bold/user-gear-bold.icon";
import { UserGearDuotoneIcon } from "../duotone/user-gear-duotone.icon";
import { UserGearFillIcon } from "../fill/user-gear-fill.icon";
import { UserGearLightIcon } from "../light/user-gear-light.icon";
import { UserGearRegularIcon } from "../regular/user-gear-regular.icon";
import { UserGearThinIcon } from "../thin/user-gear-thin.icon";

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
