import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCircleMinusBold } from "../bold";
import { UserCircleMinusDuotone } from "../duotone";
import { UserCircleMinusFill } from "../fill";
import { UserCircleMinusLight } from "../light";
import { UserCircleMinusRegular } from "../regular";
import { UserCircleMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCircleMinus = memo(function UserCircleMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleMinusBold,
      duotone: UserCircleMinusDuotone,
      fill: UserCircleMinusFill,
      light: UserCircleMinusLight,
      regular: UserCircleMinusRegular,
      thin: UserCircleMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
