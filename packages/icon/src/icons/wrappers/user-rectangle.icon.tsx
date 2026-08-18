import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserRectangleBoldIcon } from "../bold/user-rectangle-bold.icon";
import { UserRectangleDuotoneIcon } from "../duotone/user-rectangle-duotone.icon";
import { UserRectangleFillIcon } from "../fill/user-rectangle-fill.icon";
import { UserRectangleLightIcon } from "../light/user-rectangle-light.icon";
import { UserRectangleRegularIcon } from "../regular/user-rectangle-regular.icon";
import { UserRectangleThinIcon } from "../thin/user-rectangle-thin.icon";

export const UserRectangleIcon = memo(function UserRectangle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserRectangleBoldIcon,
      duotone: UserRectangleDuotoneIcon,
      fill: UserRectangleFillIcon,
      light: UserRectangleLightIcon,
      regular: UserRectangleRegularIcon,
      thin: UserRectangleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
