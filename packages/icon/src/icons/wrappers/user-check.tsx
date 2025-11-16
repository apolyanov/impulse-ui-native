import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCheckBold } from "../bold";
import { UserCheckDuotone } from "../duotone";
import { UserCheckFill } from "../fill";
import { UserCheckLight } from "../light";
import { UserCheckRegular } from "../regular";
import { UserCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCheck = memo(function UserCheck(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCheckBold,
      duotone: UserCheckDuotone,
      fill: UserCheckFill,
      light: UserCheckLight,
      regular: UserCheckRegular,
      thin: UserCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
