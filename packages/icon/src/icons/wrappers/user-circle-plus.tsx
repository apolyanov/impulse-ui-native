import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCirclePlusBold } from "../bold";
import { UserCirclePlusDuotone } from "../duotone";
import { UserCirclePlusFill } from "../fill";
import { UserCirclePlusLight } from "../light";
import { UserCirclePlusRegular } from "../regular";
import { UserCirclePlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCirclePlus = memo(function UserCirclePlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCirclePlusBold,
      duotone: UserCirclePlusDuotone,
      fill: UserCirclePlusFill,
      light: UserCirclePlusLight,
      regular: UserCirclePlusRegular,
      thin: UserCirclePlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
