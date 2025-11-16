import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserPlusBold } from "../bold";
import { UserPlusDuotone } from "../duotone";
import { UserPlusFill } from "../fill";
import { UserPlusLight } from "../light";
import { UserPlusRegular } from "../regular";
import { UserPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserPlus = memo(function UserPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserPlusBold,
      duotone: UserPlusDuotone,
      fill: UserPlusFill,
      light: UserPlusLight,
      regular: UserPlusRegular,
      thin: UserPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
