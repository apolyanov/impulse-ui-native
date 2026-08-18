import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightningSlashBoldIcon } from "../bold/lightning-slash-bold.icon";
import { LightningSlashDuotoneIcon } from "../duotone/lightning-slash-duotone.icon";
import { LightningSlashFillIcon } from "../fill/lightning-slash-fill.icon";
import { LightningSlashLightIcon } from "../light/lightning-slash-light.icon";
import { LightningSlashRegularIcon } from "../regular/lightning-slash-regular.icon";
import { LightningSlashThinIcon } from "../thin/lightning-slash-thin.icon";

export const LightningSlashIcon = memo(function LightningSlash(
  props: IconWrapperProps,
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
