import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCircleDashedBoldIcon } from "../bold/user-circle-dashed-bold.icon";
import { UserCircleDashedDuotoneIcon } from "../duotone/user-circle-dashed-duotone.icon";
import { UserCircleDashedFillIcon } from "../fill/user-circle-dashed-fill.icon";
import { UserCircleDashedLightIcon } from "../light/user-circle-dashed-light.icon";
import { UserCircleDashedRegularIcon } from "../regular/user-circle-dashed-regular.icon";
import { UserCircleDashedThinIcon } from "../thin/user-circle-dashed-thin.icon";

export const UserCircleDashedIcon = memo(function UserCircleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleDashedBoldIcon,
      duotone: UserCircleDashedDuotoneIcon,
      fill: UserCircleDashedFillIcon,
      light: UserCircleDashedLightIcon,
      regular: UserCircleDashedRegularIcon,
      thin: UserCircleDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
