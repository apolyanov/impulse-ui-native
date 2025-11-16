import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCircleGearBold } from "../bold";
import { UserCircleGearDuotone } from "../duotone";
import { UserCircleGearFill } from "../fill";
import { UserCircleGearLight } from "../light";
import { UserCircleGearRegular } from "../regular";
import { UserCircleGearThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCircleGear = memo(function UserCircleGear(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleGearBold,
      duotone: UserCircleGearDuotone,
      fill: UserCircleGearFill,
      light: UserCircleGearLight,
      regular: UserCircleGearRegular,
      thin: UserCircleGearThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
