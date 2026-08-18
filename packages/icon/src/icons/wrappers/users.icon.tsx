import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UsersBoldIcon } from "../bold/users-bold.icon";
import { UsersDuotoneIcon } from "../duotone/users-duotone.icon";
import { UsersFillIcon } from "../fill/users-fill.icon";
import { UsersLightIcon } from "../light/users-light.icon";
import { UsersRegularIcon } from "../regular/users-regular.icon";
import { UsersThinIcon } from "../thin/users-thin.icon";

export const UsersIcon = memo(function Users(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersBoldIcon,
      duotone: UsersDuotoneIcon,
      fill: UsersFillIcon,
      light: UsersLightIcon,
      regular: UsersRegularIcon,
      thin: UsersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
