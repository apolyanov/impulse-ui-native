import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiSlashBoldIcon } from "../bold";
import { WifiSlashDuotoneIcon } from "../duotone";
import { WifiSlashFillIcon } from "../fill";
import { WifiSlashLightIcon } from "../light";
import { WifiSlashRegularIcon } from "../regular";
import { WifiSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiSlashIcon = memo(function WifiSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiSlashBoldIcon,
      duotone: WifiSlashDuotoneIcon,
      fill: WifiSlashFillIcon,
      light: WifiSlashLightIcon,
      regular: WifiSlashRegularIcon,
      thin: WifiSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
