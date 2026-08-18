import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NetworkSlashBoldIcon } from "../bold/network-slash-bold.icon";
import { NetworkSlashDuotoneIcon } from "../duotone/network-slash-duotone.icon";
import { NetworkSlashFillIcon } from "../fill/network-slash-fill.icon";
import { NetworkSlashLightIcon } from "../light/network-slash-light.icon";
import { NetworkSlashRegularIcon } from "../regular/network-slash-regular.icon";
import { NetworkSlashThinIcon } from "../thin/network-slash-thin.icon";

export const NetworkSlashIcon = memo(function NetworkSlash(
  props: IconWrapperProps,
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
