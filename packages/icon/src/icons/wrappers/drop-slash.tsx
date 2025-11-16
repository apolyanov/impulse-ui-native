import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropSlashBold } from "../bold";
import { DropSlashDuotone } from "../duotone";
import { DropSlashFill } from "../fill";
import { DropSlashLight } from "../light";
import { DropSlashRegular } from "../regular";
import { DropSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropSlash = memo(function DropSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropSlashBold,
      duotone: DropSlashDuotone,
      fill: DropSlashFill,
      light: DropSlashLight,
      regular: DropSlashRegular,
      thin: DropSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
