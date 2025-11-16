import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCircleCheckBold } from "../bold";
import { UserCircleCheckDuotone } from "../duotone";
import { UserCircleCheckFill } from "../fill";
import { UserCircleCheckLight } from "../light";
import { UserCircleCheckRegular } from "../regular";
import { UserCircleCheckThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCircleCheck = memo(function UserCircleCheck(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleCheckBold,
      duotone: UserCircleCheckDuotone,
      fill: UserCircleCheckFill,
      light: UserCircleCheckLight,
      regular: UserCircleCheckRegular,
      thin: UserCircleCheckThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
