import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCircleMinusBoldIcon } from "../bold";
import { UserCircleMinusDuotoneIcon } from "../duotone";
import { UserCircleMinusFillIcon } from "../fill";
import { UserCircleMinusLightIcon } from "../light";
import { UserCircleMinusRegularIcon } from "../regular";
import { UserCircleMinusThinIcon } from "../thin";

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
