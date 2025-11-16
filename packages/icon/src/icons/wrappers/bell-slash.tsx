import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSlashBold } from "../bold";
import { BellSlashDuotone } from "../duotone";
import { BellSlashFill } from "../fill";
import { BellSlashLight } from "../light";
import { BellSlashRegular } from "../regular";
import { BellSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSlash = memo(function BellSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSlashBold,
      duotone: BellSlashDuotone,
      fill: BellSlashFill,
      light: BellSlashLight,
      regular: BellSlashRegular,
      thin: BellSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
