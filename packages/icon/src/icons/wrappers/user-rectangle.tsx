import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserRectangleBold } from "../bold";
import { UserRectangleDuotone } from "../duotone";
import { UserRectangleFill } from "../fill";
import { UserRectangleLight } from "../light";
import { UserRectangleRegular } from "../regular";
import { UserRectangleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserRectangle = memo(function UserRectangle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserRectangleBold,
      duotone: UserRectangleDuotone,
      fill: UserRectangleFill,
      light: UserRectangleLight,
      regular: UserRectangleRegular,
      thin: UserRectangleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
