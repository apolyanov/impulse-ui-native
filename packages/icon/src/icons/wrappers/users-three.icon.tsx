import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UsersThreeBoldIcon } from "../bold";
import { UsersThreeDuotoneIcon } from "../duotone";
import { UsersThreeFillIcon } from "../fill";
import { UsersThreeLightIcon } from "../light";
import { UsersThreeRegularIcon } from "../regular";
import { UsersThreeThinIcon } from "../thin";

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
