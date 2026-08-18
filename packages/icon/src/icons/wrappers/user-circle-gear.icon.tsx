import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCircleGearBoldIcon } from "../bold/user-circle-gear-bold.icon";
import { UserCircleGearDuotoneIcon } from "../duotone/user-circle-gear-duotone.icon";
import { UserCircleGearFillIcon } from "../fill/user-circle-gear-fill.icon";
import { UserCircleGearLightIcon } from "../light/user-circle-gear-light.icon";
import { UserCircleGearRegularIcon } from "../regular/user-circle-gear-regular.icon";
import { UserCircleGearThinIcon } from "../thin/user-circle-gear-thin.icon";

export const UserCircleGearIcon = memo(function UserCircleGear(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleGearBoldIcon,
      duotone: UserCircleGearDuotoneIcon,
      fill: UserCircleGearFillIcon,
      light: UserCircleGearLightIcon,
      regular: UserCircleGearRegularIcon,
      thin: UserCircleGearThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
