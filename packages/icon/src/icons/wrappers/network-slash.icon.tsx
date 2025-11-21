import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NetworkSlashBoldIcon } from "../bold";
import { NetworkSlashDuotoneIcon } from "../duotone";
import { NetworkSlashFillIcon } from "../fill";
import { NetworkSlashLightIcon } from "../light";
import { NetworkSlashRegularIcon } from "../regular";
import { NetworkSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NetworkSlashIcon = memo(function NetworkSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkSlashBoldIcon,
      duotone: NetworkSlashDuotoneIcon,
      fill: NetworkSlashFillIcon,
      light: NetworkSlashLightIcon,
      regular: NetworkSlashRegularIcon,
      thin: NetworkSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
