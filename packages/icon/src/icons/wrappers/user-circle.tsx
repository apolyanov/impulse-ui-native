import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserCircleBold } from "../bold";
import { UserCircleDuotone } from "../duotone";
import { UserCircleFill } from "../fill";
import { UserCircleLight } from "../light";
import { UserCircleRegular } from "../regular";
import { UserCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserCircle = memo(function UserCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserCircleBold,
      duotone: UserCircleDuotone,
      fill: UserCircleFill,
      light: UserCircleLight,
      regular: UserCircleRegular,
      thin: UserCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
