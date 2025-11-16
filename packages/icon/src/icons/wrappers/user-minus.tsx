import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserMinusBold } from "../bold";
import { UserMinusDuotone } from "../duotone";
import { UserMinusFill } from "../fill";
import { UserMinusLight } from "../light";
import { UserMinusRegular } from "../regular";
import { UserMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserMinus = memo(function UserMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserMinusBold,
      duotone: UserMinusDuotone,
      fill: UserMinusFill,
      light: UserMinusLight,
      regular: UserMinusRegular,
      thin: UserMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
