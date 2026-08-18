import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiSlashBoldIcon } from "../bold/wifi-slash-bold.icon";
import { WifiSlashDuotoneIcon } from "../duotone/wifi-slash-duotone.icon";
import { WifiSlashFillIcon } from "../fill/wifi-slash-fill.icon";
import { WifiSlashLightIcon } from "../light/wifi-slash-light.icon";
import { WifiSlashRegularIcon } from "../regular/wifi-slash-regular.icon";
import { WifiSlashThinIcon } from "../thin/wifi-slash-thin.icon";

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
