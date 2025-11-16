import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GrainsSlashBold } from "../bold";
import { GrainsSlashDuotone } from "../duotone";
import { GrainsSlashFill } from "../fill";
import { GrainsSlashLight } from "../light";
import { GrainsSlashRegular } from "../regular";
import { GrainsSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GrainsSlash = memo(function GrainsSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GrainsSlashBold,
      duotone: GrainsSlashDuotone,
      fill: GrainsSlashFill,
      light: GrainsSlashLight,
      regular: GrainsSlashRegular,
      thin: GrainsSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
