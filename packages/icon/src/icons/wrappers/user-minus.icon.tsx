import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserMinusBoldIcon } from "../bold";
import { UserMinusDuotoneIcon } from "../duotone";
import { UserMinusFillIcon } from "../fill";
import { UserMinusLightIcon } from "../light";
import { UserMinusRegularIcon } from "../regular";
import { UserMinusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserMinusIcon = memo(function UserMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserMinusBoldIcon,
      duotone: UserMinusDuotoneIcon,
      fill: UserMinusFillIcon,
      light: UserMinusLightIcon,
      regular: UserMinusRegularIcon,
      thin: UserMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
