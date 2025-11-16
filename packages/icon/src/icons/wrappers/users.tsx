import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UsersBold } from "../bold";
import { UsersDuotone } from "../duotone";
import { UsersFill } from "../fill";
import { UsersLight } from "../light";
import { UsersRegular } from "../regular";
import { UsersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Users = memo(function Users(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersBold,
      duotone: UsersDuotone,
      fill: UsersFill,
      light: UsersLight,
      regular: UsersRegular,
      thin: UsersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
