import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserMinusBoldIcon } from "../bold/user-minus-bold.icon";
import { UserMinusDuotoneIcon } from "../duotone/user-minus-duotone.icon";
import { UserMinusFillIcon } from "../fill/user-minus-fill.icon";
import { UserMinusLightIcon } from "../light/user-minus-light.icon";
import { UserMinusRegularIcon } from "../regular/user-minus-regular.icon";
import { UserMinusThinIcon } from "../thin/user-minus-thin.icon";

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
