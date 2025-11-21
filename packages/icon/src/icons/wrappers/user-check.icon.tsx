import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCheckBoldIcon } from "../bold";
import { UserCheckDuotoneIcon } from "../duotone";
import { UserCheckFillIcon } from "../fill";
import { UserCheckLightIcon } from "../light";
import { UserCheckRegularIcon } from "../regular";
import { UserCheckThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
