import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldSlashBold } from "../bold";
import { ShieldSlashDuotone } from "../duotone";
import { ShieldSlashFill } from "../fill";
import { ShieldSlashLight } from "../light";
import { ShieldSlashRegular } from "../regular";
import { ShieldSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldSlash = memo(function ShieldSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldSlashBold,
      duotone: ShieldSlashDuotone,
      fill: ShieldSlashFill,
      light: ShieldSlashLight,
      regular: ShieldSlashRegular,
      thin: ShieldSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
