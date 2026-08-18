import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserSquareBoldIcon } from "../bold/user-square-bold.icon";
import { UserSquareDuotoneIcon } from "../duotone/user-square-duotone.icon";
import { UserSquareFillIcon } from "../fill/user-square-fill.icon";
import { UserSquareLightIcon } from "../light/user-square-light.icon";
import { UserSquareRegularIcon } from "../regular/user-square-regular.icon";
import { UserSquareThinIcon } from "../thin/user-square-thin.icon";

export const UserSquareIcon = memo(function UserSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSquareBoldIcon,
      duotone: UserSquareDuotoneIcon,
      fill: UserSquareFillIcon,
      light: UserSquareLightIcon,
      regular: UserSquareRegularIcon,
      thin: UserSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
