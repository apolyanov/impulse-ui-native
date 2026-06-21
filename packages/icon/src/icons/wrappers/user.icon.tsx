import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserBoldIcon } from "../bold";
import { UserDuotoneIcon } from "../duotone";
import { UserFillIcon } from "../fill";
import { UserLightIcon } from "../light";
import { UserRegularIcon } from "../regular";
import { UserThinIcon } from "../thin";

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
