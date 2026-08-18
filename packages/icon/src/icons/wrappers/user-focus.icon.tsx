import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserFocusBoldIcon } from "../bold/user-focus-bold.icon";
import { UserFocusDuotoneIcon } from "../duotone/user-focus-duotone.icon";
import { UserFocusFillIcon } from "../fill/user-focus-fill.icon";
import { UserFocusLightIcon } from "../light/user-focus-light.icon";
import { UserFocusRegularIcon } from "../regular/user-focus-regular.icon";
import { UserFocusThinIcon } from "../thin/user-focus-thin.icon";

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
