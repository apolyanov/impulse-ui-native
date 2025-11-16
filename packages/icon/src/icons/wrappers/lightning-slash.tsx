import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightningSlashBold } from "../bold";
import { LightningSlashDuotone } from "../duotone";
import { LightningSlashFill } from "../fill";
import { LightningSlashLight } from "../light";
import { LightningSlashRegular } from "../regular";
import { LightningSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightningSlash = memo(function LightningSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningSlashBold,
      duotone: LightningSlashDuotone,
      fill: LightningSlashFill,
      light: LightningSlashLight,
      regular: LightningSlashRegular,
      thin: LightningSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
