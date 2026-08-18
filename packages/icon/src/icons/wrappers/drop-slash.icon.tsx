import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropSlashBoldIcon } from "../bold/drop-slash-bold.icon";
import { DropSlashDuotoneIcon } from "../duotone/drop-slash-duotone.icon";
import { DropSlashFillIcon } from "../fill/drop-slash-fill.icon";
import { DropSlashLightIcon } from "../light/drop-slash-light.icon";
import { DropSlashRegularIcon } from "../regular/drop-slash-regular.icon";
import { DropSlashThinIcon } from "../thin/drop-slash-thin.icon";

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
