import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UsersFourBoldIcon } from "../bold/users-four-bold.icon";
import { UsersFourDuotoneIcon } from "../duotone/users-four-duotone.icon";
import { UsersFourFillIcon } from "../fill/users-four-fill.icon";
import { UsersFourLightIcon } from "../light/users-four-light.icon";
import { UsersFourRegularIcon } from "../regular/users-four-regular.icon";
import { UsersFourThinIcon } from "../thin/users-four-thin.icon";

export const UsersFourIcon = memo(function UsersFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersFourBoldIcon,
      duotone: UsersFourDuotoneIcon,
      fill: UsersFourFillIcon,
      light: UsersFourLightIcon,
      regular: UsersFourRegularIcon,
      thin: UsersFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
