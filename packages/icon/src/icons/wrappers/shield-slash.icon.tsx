import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldSlashBoldIcon } from "../bold/shield-slash-bold.icon";
import { ShieldSlashDuotoneIcon } from "../duotone/shield-slash-duotone.icon";
import { ShieldSlashFillIcon } from "../fill/shield-slash-fill.icon";
import { ShieldSlashLightIcon } from "../light/shield-slash-light.icon";
import { ShieldSlashRegularIcon } from "../regular/shield-slash-regular.icon";
import { ShieldSlashThinIcon } from "../thin/shield-slash-thin.icon";

export const ShieldSlashIcon = memo(function ShieldSlash(
  props: IconWrapperProps,
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
