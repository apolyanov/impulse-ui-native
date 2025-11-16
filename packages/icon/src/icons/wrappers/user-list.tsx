import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserListBold } from "../bold";
import { UserListDuotone } from "../duotone";
import { UserListFill } from "../fill";
import { UserListLight } from "../light";
import { UserListRegular } from "../regular";
import { UserListThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserList = memo(function UserList(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserListBold,
      duotone: UserListDuotone,
      fill: UserListFill,
      light: UserListLight,
      regular: UserListRegular,
      thin: UserListThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
