import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightningSlashBoldIcon } from "../bold";
import { LightningSlashDuotoneIcon } from "../duotone";
import { LightningSlashFillIcon } from "../fill";
import { LightningSlashLightIcon } from "../light";
import { LightningSlashRegularIcon } from "../regular";
import { LightningSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightningSlashIcon = memo(function LightningSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningSlashBoldIcon,
      duotone: LightningSlashDuotoneIcon,
      fill: LightningSlashFillIcon,
      light: LightningSlashLightIcon,
      regular: LightningSlashRegularIcon,
      thin: LightningSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
