import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EarSlashBold } from "../bold";
import { EarSlashDuotone } from "../duotone";
import { EarSlashFill } from "../fill";
import { EarSlashLight } from "../light";
import { EarSlashRegular } from "../regular";
import { EarSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EarSlash = memo(function EarSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EarSlashBold,
      duotone: EarSlashDuotone,
      fill: EarSlashFill,
      light: EarSlashLight,
      regular: EarSlashRegular,
      thin: EarSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
