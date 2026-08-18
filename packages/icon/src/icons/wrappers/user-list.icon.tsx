import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserListBoldIcon } from "../bold/user-list-bold.icon";
import { UserListDuotoneIcon } from "../duotone/user-list-duotone.icon";
import { UserListFillIcon } from "../fill/user-list-fill.icon";
import { UserListLightIcon } from "../light/user-list-light.icon";
import { UserListRegularIcon } from "../regular/user-list-regular.icon";
import { UserListThinIcon } from "../thin/user-list-thin.icon";

export const UserListIcon = memo(function UserList(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserListBoldIcon,
      duotone: UserListDuotoneIcon,
      fill: UserListFillIcon,
      light: UserListLightIcon,
      regular: UserListRegularIcon,
      thin: UserListThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
