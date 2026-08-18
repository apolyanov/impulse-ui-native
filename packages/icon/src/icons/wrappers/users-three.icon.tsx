import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UsersThreeBoldIcon } from "../bold/users-three-bold.icon";
import { UsersThreeDuotoneIcon } from "../duotone/users-three-duotone.icon";
import { UsersThreeFillIcon } from "../fill/users-three-fill.icon";
import { UsersThreeLightIcon } from "../light/users-three-light.icon";
import { UsersThreeRegularIcon } from "../regular/users-three-regular.icon";
import { UsersThreeThinIcon } from "../thin/users-three-thin.icon";

export const UsersThreeIcon = memo(function UsersThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersThreeBoldIcon,
      duotone: UsersThreeDuotoneIcon,
      fill: UsersThreeFillIcon,
      light: UsersThreeLightIcon,
      regular: UsersThreeRegularIcon,
      thin: UsersThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
