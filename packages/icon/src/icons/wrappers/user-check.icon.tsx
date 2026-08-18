import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCheckBoldIcon } from "../bold/user-check-bold.icon";
import { UserCheckDuotoneIcon } from "../duotone/user-check-duotone.icon";
import { UserCheckFillIcon } from "../fill/user-check-fill.icon";
import { UserCheckLightIcon } from "../light/user-check-light.icon";
import { UserCheckRegularIcon } from "../regular/user-check-regular.icon";
import { UserCheckThinIcon } from "../thin/user-check-thin.icon";

export const UserCheckIcon = memo(function UserCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCheckBoldIcon,
      duotone: UserCheckDuotoneIcon,
      fill: UserCheckFillIcon,
      light: UserCheckLightIcon,
      regular: UserCheckRegularIcon,
      thin: UserCheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
