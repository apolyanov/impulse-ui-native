import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSimpleSlashBold } from "../bold";
import { BellSimpleSlashDuotone } from "../duotone";
import { BellSimpleSlashFill } from "../fill";
import { BellSimpleSlashLight } from "../light";
import { BellSimpleSlashRegular } from "../regular";
import { BellSimpleSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSimpleSlash = memo(function BellSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleSlashBold,
      duotone: BellSimpleSlashDuotone,
      fill: BellSimpleSlashFill,
      light: BellSimpleSlashLight,
      regular: BellSimpleSlashRegular,
      thin: BellSimpleSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
