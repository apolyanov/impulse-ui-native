import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCircleDashedBold } from "../bold";
import { UserCircleDashedDuotone } from "../duotone";
import { UserCircleDashedFill } from "../fill";
import { UserCircleDashedLight } from "../light";
import { UserCircleDashedRegular } from "../regular";
import { UserCircleDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCircleDashed = memo(function UserCircleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleDashedBold,
      duotone: UserCircleDashedDuotone,
      fill: UserCircleDashedFill,
      light: UserCircleDashedLight,
      regular: UserCircleDashedRegular,
      thin: UserCircleDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
