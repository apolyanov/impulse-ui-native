import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellSlashBoldIcon } from "../bold/bell-slash-bold.icon";
import { BellSlashDuotoneIcon } from "../duotone/bell-slash-duotone.icon";
import { BellSlashFillIcon } from "../fill/bell-slash-fill.icon";
import { BellSlashLightIcon } from "../light/bell-slash-light.icon";
import { BellSlashRegularIcon } from "../regular/bell-slash-regular.icon";
import { BellSlashThinIcon } from "../thin/bell-slash-thin.icon";

export const BellSlashIcon = memo(function BellSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSlashBoldIcon,
      duotone: BellSlashDuotoneIcon,
      fill: BellSlashFillIcon,
      light: BellSlashLightIcon,
      regular: BellSlashRegularIcon,
      thin: BellSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
