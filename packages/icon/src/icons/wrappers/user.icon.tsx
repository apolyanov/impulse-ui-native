import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserBoldIcon } from "../bold/user-bold.icon";
import { UserDuotoneIcon } from "../duotone/user-duotone.icon";
import { UserFillIcon } from "../fill/user-fill.icon";
import { UserLightIcon } from "../light/user-light.icon";
import { UserRegularIcon } from "../regular/user-regular.icon";
import { UserThinIcon } from "../thin/user-thin.icon";

export const UserIcon = memo(function User(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserBoldIcon,
      duotone: UserDuotoneIcon,
      fill: UserFillIcon,
      light: UserLightIcon,
      regular: UserRegularIcon,
      thin: UserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
