import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCircleMinusBoldIcon } from "../bold/user-circle-minus-bold.icon";
import { UserCircleMinusDuotoneIcon } from "../duotone/user-circle-minus-duotone.icon";
import { UserCircleMinusFillIcon } from "../fill/user-circle-minus-fill.icon";
import { UserCircleMinusLightIcon } from "../light/user-circle-minus-light.icon";
import { UserCircleMinusRegularIcon } from "../regular/user-circle-minus-regular.icon";
import { UserCircleMinusThinIcon } from "../thin/user-circle-minus-thin.icon";

export const UserCircleMinusIcon = memo(function UserCircleMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleMinusBoldIcon,
      duotone: UserCircleMinusDuotoneIcon,
      fill: UserCircleMinusFillIcon,
      light: UserCircleMinusLightIcon,
      regular: UserCircleMinusRegularIcon,
      thin: UserCircleMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
