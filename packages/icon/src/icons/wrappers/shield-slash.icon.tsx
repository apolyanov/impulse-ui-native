import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldSlashBoldIcon } from "../bold";
import { ShieldSlashDuotoneIcon } from "../duotone";
import { ShieldSlashFillIcon } from "../fill";
import { ShieldSlashLightIcon } from "../light";
import { ShieldSlashRegularIcon } from "../regular";
import { ShieldSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldSlashIcon = memo(function ShieldSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldSlashBoldIcon,
      duotone: ShieldSlashDuotoneIcon,
      fill: ShieldSlashFillIcon,
      light: ShieldSlashLightIcon,
      regular: ShieldSlashRegularIcon,
      thin: ShieldSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
