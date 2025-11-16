import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UsersThreeBold } from "../bold";
import { UsersThreeDuotone } from "../duotone";
import { UsersThreeFill } from "../fill";
import { UsersThreeLight } from "../light";
import { UsersThreeRegular } from "../regular";
import { UsersThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UsersThree = memo(function UsersThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsersThreeBold,
      duotone: UsersThreeDuotone,
      fill: UsersThreeFill,
      light: UsersThreeLight,
      regular: UsersThreeRegular,
      thin: UsersThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
