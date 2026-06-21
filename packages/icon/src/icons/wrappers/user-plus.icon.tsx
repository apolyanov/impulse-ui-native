import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserPlusBoldIcon } from "../bold";
import { UserPlusDuotoneIcon } from "../duotone";
import { UserPlusFillIcon } from "../fill";
import { UserPlusLightIcon } from "../light";
import { UserPlusRegularIcon } from "../regular";
import { UserPlusThinIcon } from "../thin";

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
