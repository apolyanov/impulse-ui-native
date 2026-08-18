import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GrainsSlashBoldIcon } from "../bold/grains-slash-bold.icon";
import { GrainsSlashDuotoneIcon } from "../duotone/grains-slash-duotone.icon";
import { GrainsSlashFillIcon } from "../fill/grains-slash-fill.icon";
import { GrainsSlashLightIcon } from "../light/grains-slash-light.icon";
import { GrainsSlashRegularIcon } from "../regular/grains-slash-regular.icon";
import { GrainsSlashThinIcon } from "../thin/grains-slash-thin.icon";

export const GrainsSlashIcon = memo(function GrainsSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GrainsSlashBoldIcon,
      duotone: GrainsSlashDuotoneIcon,
      fill: GrainsSlashFillIcon,
      light: GrainsSlashLightIcon,
      regular: GrainsSlashRegularIcon,
      thin: GrainsSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
