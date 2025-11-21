import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserListBoldIcon } from "../bold";
import { UserListDuotoneIcon } from "../duotone";
import { UserListFillIcon } from "../fill";
import { UserListLightIcon } from "../light";
import { UserListRegularIcon } from "../regular";
import { UserListThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
