import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropSlashBoldIcon } from "../bold";
import { DropSlashDuotoneIcon } from "../duotone";
import { DropSlashFillIcon } from "../fill";
import { DropSlashLightIcon } from "../light";
import { DropSlashRegularIcon } from "../regular";
import { DropSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropSlashIcon = memo(function DropSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropSlashBoldIcon,
      duotone: DropSlashDuotoneIcon,
      fill: DropSlashFillIcon,
      light: DropSlashLightIcon,
      regular: DropSlashRegularIcon,
      thin: DropSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
