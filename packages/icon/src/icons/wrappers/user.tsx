import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserBold } from "../bold";
import { UserDuotone } from "../duotone";
import { UserFill } from "../fill";
import { UserLight } from "../light";
import { UserRegular } from "../regular";
import { UserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const User = memo(function User(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserBold,
      duotone: UserDuotone,
      fill: UserFill,
      light: UserLight,
      regular: UserRegular,
      thin: UserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
