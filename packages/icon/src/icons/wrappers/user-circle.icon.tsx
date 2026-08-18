import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserCircleBoldIcon } from "../bold/user-circle-bold.icon";
import { UserCircleDuotoneIcon } from "../duotone/user-circle-duotone.icon";
import { UserCircleFillIcon } from "../fill/user-circle-fill.icon";
import { UserCircleLightIcon } from "../light/user-circle-light.icon";
import { UserCircleRegularIcon } from "../regular/user-circle-regular.icon";
import { UserCircleThinIcon } from "../thin/user-circle-thin.icon";

export const UserCircleIcon = memo(function UserCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleBoldIcon,
      duotone: UserCircleDuotoneIcon,
      fill: UserCircleFillIcon,
      light: UserCircleLightIcon,
      regular: UserCircleRegularIcon,
      thin: UserCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
