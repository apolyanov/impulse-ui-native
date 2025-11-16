import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotSupersetOfBold } from "../bold";
import { NotSupersetOfDuotone } from "../duotone";
import { NotSupersetOfFill } from "../fill";
import { NotSupersetOfLight } from "../light";
import { NotSupersetOfRegular } from "../regular";
import { NotSupersetOfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotSupersetOf = memo(function NotSupersetOf(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotSupersetOfBold,
      duotone: NotSupersetOfDuotone,
      fill: NotSupersetOfFill,
      light: NotSupersetOfLight,
      regular: NotSupersetOfRegular,
      thin: NotSupersetOfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
