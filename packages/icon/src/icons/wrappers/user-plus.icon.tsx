import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserPlusBoldIcon } from "../bold/user-plus-bold.icon";
import { UserPlusDuotoneIcon } from "../duotone/user-plus-duotone.icon";
import { UserPlusFillIcon } from "../fill/user-plus-fill.icon";
import { UserPlusLightIcon } from "../light/user-plus-light.icon";
import { UserPlusRegularIcon } from "../regular/user-plus-regular.icon";
import { UserPlusThinIcon } from "../thin/user-plus-thin.icon";

export const UserPlusIcon = memo(function UserPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserPlusBoldIcon,
      duotone: UserPlusDuotoneIcon,
      fill: UserPlusFillIcon,
      light: UserPlusLightIcon,
      regular: UserPlusRegularIcon,
      thin: UserPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
