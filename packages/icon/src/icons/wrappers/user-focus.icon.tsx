import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserFocusBoldIcon } from "../bold";
import { UserFocusDuotoneIcon } from "../duotone";
import { UserFocusFillIcon } from "../fill";
import { UserFocusLightIcon } from "../light";
import { UserFocusRegularIcon } from "../regular";
import { UserFocusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserFocusIcon = memo(function UserFocus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserFocusBoldIcon,
      duotone: UserFocusDuotoneIcon,
      fill: UserFocusFillIcon,
      light: UserFocusLightIcon,
      regular: UserFocusRegularIcon,
      thin: UserFocusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
